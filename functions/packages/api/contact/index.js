import { createHash } from "node:crypto";

export async function main(event) {
  if (event?.http?.method !== "POST") {
    return {
      body: { error: "Method not allowed. Use POST." },
      statusCode: 405,
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

  return {
    body: { message: "Contact form submitted successfully" },
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
  };
}
