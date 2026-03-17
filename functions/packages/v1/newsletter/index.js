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
      : {
          success: false,
          errorCodes: data["error-codes"] || ["invalid-input-response"],
        };
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

  const email = event.email;

  if (!email || typeof email !== "string") {
    return {
      body: { error: "Email is required" },
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
    };
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID;

  if (!apiKey || !listId) {
    return {
      body: { error: "Newsletter service is not configured" },
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

  const response = await fetch(
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
      }),
    },
  );

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    if (
      response.status === 400 &&
      data.title === "Forgotten Email Not Subscribed"
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
        error: data.detail || data.title || "Failed to subscribe to newsletter",
      },
      statusCode: response.status >= 500 ? 502 : response.status,
      headers: { "Content-Type": "application/json" },
    };
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
        tags: [{ name: "newsletter", status: "active" }],
      }),
    },
  );

  if (!tagResponse.ok) {
    const tagData = await tagResponse.json().catch(() => ({}));
    console.error("Failed to add newsletter tag:", tagData);
    // Don't fail the request - subscription succeeded, tag is best-effort
  }

  return {
    body: { message: "Successfully subscribed to newsletter" },
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
  };
}
