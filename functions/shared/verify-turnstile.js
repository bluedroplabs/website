/**
 * Verifies a Cloudflare Turnstile token via the Siteverify API.
 * @param {string} token - The token from the client
 * @param {string} [remoteip] - Optional visitor IP
 * @returns {Promise<{ success: boolean; errorCodes?: string[] }>}
 */
export async function verifyTurnstile(token, remoteip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return { success: true }; // Skip verification when not configured
  }

  if (!token || typeof token !== "string" || !token.trim()) {
    return {
      success: false,
      errorCodes: ["missing-input-response"],
    };
  }

  try {
    const body = { secret, response: token };
    if (remoteip) body.remoteip = remoteip;

    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );

    const data = await response.json().catch(() => ({}));

    if (data.success) {
      return { success: true };
    }

    return {
      success: false,
      errorCodes: data["error-codes"] || ["invalid-input-response"],
    };
  } catch (err) {
    console.error("Turnstile verification error:", err);
    return { success: false, errorCodes: ["internal-error"] };
  }
}
