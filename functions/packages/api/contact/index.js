export function main(event) {
  if (event?.http?.method !== "POST") {
    return {
      body: { error: "Method not allowed. Use POST." },
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
    };
  }

  const _name = event.name;
  const email = event.email;
  const _company = event.company;
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

  // TODO: Send contact form (e.g. email, CRM, support ticket system)
  // await contactService.submit({ name: _name, email, company: _company, message });

  return {
    body: { message: "Contact form submitted successfully" },
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
  };
}
