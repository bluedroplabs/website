export function main(event) {
  if (event?.http?.method !== "POST") {
    return {
      body: { error: "Method not allowed. Use POST." },
      statusCode: 405,
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

  // TODO: Subscribe email to newsletter (e.g. Mailchimp, ConvertKit, etc.)
  // await newsletterService.subscribe(email);

  return {
    body: { message: "Successfully subscribed to newsletter" },
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
  };
}
