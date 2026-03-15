import { createHash } from "node:crypto";

async function verifyTurnstile(token, remoteip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return { success: true };
  if (!token || typeof token !== "string" || !token.trim()) {
    return { success: false, errorCodes: ["missing-input-response"] };
  }
  try {
    const body = { secret, response: token };
    if (remoteip) body.remoteip = remoteip;
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );
    const data = await res.json().catch(() => ({}));
    return data.success
      ? { success: true }
      : { success: false, errorCodes: data["error-codes"] || ["invalid-input-response"] };
  } catch (err) {
    console.error("Turnstile verification error:", err);
    return { success: false, errorCodes: ["internal-error"] };
  }
}

export async function main(event) {
  if (event?.http?.method !== "POST") {
    return {
      body: { error: "Method not allowed. Use POST." },
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
    };
  }

  const turnstileResult = await verifyTurnstile(
    event.cfTurnstileResponse,
    event.http?.headers?.["x-forwarded-for"]?.split(",")[0]?.trim(),
  );
  if (!turnstileResult.success) {
    return {
      body: {
        error:
          "Verification failed. Please complete the security check and try again.",
      },
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
    };
  }

  const name = event.name;
  const email = event.email;
  const company = event.company;
  const message = event.message;

  if (!email || typeof email !== "string") {
    return {
      body: { error: "Email is required" },
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
    };
  }

  if (!message || typeof message !== "string") {
    return {
      body: { error: "Message is required" },
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
    };
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID;

  if (!apiKey || !listId) {
    return {
      body: { error: "Contact service is not configured" },
      statusCode: 503,
      headers: { "Content-Type": "application/json" },
    };
  }

  const dc = apiKey.split("-").pop();
  const baseUrl = `https://${dc}.api.mailchimp.com/3.0`;
  const subscriberHash = createHash("md5")
    .update(email.toLowerCase().trim())
    .digest("hex");
  const auth = Buffer.from(`anystring:${apiKey}`).toString("base64");

  const mergeFields = {};
  if (name && typeof name === "string") {
    const nameParts = name.trim().split(/\s+/);
    mergeFields.FNAME = nameParts[0] ?? "";
    if (nameParts.length > 1) {
      mergeFields.LNAME = nameParts.slice(1).join(" ");
    }
  }
  if (company && typeof company === "string") {
    mergeFields.COMPANY = company;
  }

  const memberResponse = await fetch(
    `${baseUrl}/lists/${listId}/members/${subscriberHash}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        email_address: email.trim().toLowerCase(),
        status: "subscribed",
        merge_fields:
          Object.keys(mergeFields).length > 0 ? mergeFields : undefined,
      }),
    },
  );

  const memberData = await memberResponse.json().catch(() => ({}));

  if (!memberResponse.ok) {
    if (
      memberResponse.status === 400 &&
      memberData.title === "Forgotten Email Not Subscribed"
    ) {
      return {
        body: {
          error:
            "This email was previously unsubscribed and must resubscribe directly.",
        },
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
      };
    }
    return {
      body: {
        error:
          memberData.detail ||
          memberData.title ||
          "Failed to submit contact form",
      },
      statusCode: memberResponse.status >= 500 ? 502 : memberResponse.status,
      headers: { "Content-Type": "application/json" },
    };
  }

  const noteParts = [message];
  const noteText = noteParts.join("\n\n").slice(0, 1000);

  const noteResponse = await fetch(
    `${baseUrl}/lists/${listId}/members/${subscriberHash}/notes`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({ note: noteText }),
    },
  );

  if (!noteResponse.ok) {
    const noteData = await noteResponse.json().catch(() => ({}));
    console.error("Failed to add contact note:", noteData);
  }

  const tagResponse = await fetch(
    `${baseUrl}/lists/${listId}/members/${subscriberHash}/tags`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        tags: [{ name: "website lead", status: "active" }],
      }),
    },
  );

  if (!tagResponse.ok) {
    const tagData = await tagResponse.json().catch(() => ({}));
    console.error("Failed to add website lead tag:", tagData);
  }

  const mandrillKey = process.env.MANDRILL_API_KEY;
  if (mandrillKey) {
    const fromEmail =
      process.env.MANDRILL_FROM_EMAIL || "no-reply@bluedroplabs.com";
    const emailBody = [
      "New lead from the website",
      "",
      `Name: ${name || "(not provided)"}`,
      `Email: ${email}`,
      `Company: ${company || "(not provided)"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mandrillResponse = await fetch(
      "https://mandrillapp.com/api/1.0/messages/send.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          key: mandrillKey,
          message: {
            from_email: fromEmail,
            from_name: "Blue Drop Labs",
            subject: `New website lead from ${email || "(not provided)"}`,
            text: emailBody,
            to: [{ email: "sales@bluedroplabs.com", type: "to" }],
          },
        }),
      },
    );

    if (!mandrillResponse.ok) {
      const mandrillData = await mandrillResponse.json().catch(() => ({}));
      console.error("Failed to send lead notification email:", mandrillData);
    }

    const firstName = name?.trim().split(/\s+/)[0] || "there";
    const confirmationBody = [
      `Hi ${firstName},`,
      "",
      "Thank you for reaching out to Blue Drop Labs. We've received your message and appreciate you taking the time to connect with us.",
      "",
      "A member of our team will review your inquiry and get back to you as soon as possible. We typically respond within one business day.",
      "",
      "In the meantime, feel free to explore our website to learn more about our services.",
      "",
      "Best regards,",
      "",
      "Nathan Dentzau",
      "CEO, Blue Drop Labs",
    ].join("\n");

    const confirmationResponse = await fetch(
      "https://mandrillapp.com/api/1.0/messages/send.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          key: mandrillKey,
          message: {
            from_email: fromEmail,
            from_name: "Nathan Dentzau",
            subject: "We've received your message – Blue Drop Labs",
            text: confirmationBody,
            to: [{ email: email.trim().toLowerCase(), type: "to" }],
          },
        }),
      },
    );

    if (!confirmationResponse.ok) {
      const confirmationData = await confirmationResponse
        .json()
        .catch(() => ({}));
      console.error("Failed to send confirmation email:", confirmationData);
    }
  }

  return {
    body: { message: "Contact form submitted successfully" },
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
  };
}
