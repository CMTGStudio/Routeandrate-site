import { ReplitConnectors } from "@replit/connectors-sdk";

function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function sendAuditRequestEmail(data: {
  name: string;
  brand: string;
  spend: string;
  threepl: string;
  notes?: string;
}) {
  const connectors = new ReplitConnectors();

  const bodyText = [
    `Name: ${data.name}`,
    `Brand / company: ${data.brand}`,
    `Monthly 3PL spend: ${data.spend}`,
    `3PL provider: ${data.threepl}`,
    data.notes ? `Additional notes: ${data.notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const rawMessage = [
    `To: adam@routeandrate.com`,
    `Subject: New Audit Request — ${sanitizeHeader(data.brand)}`,
    `Content-Type: text/plain; charset=utf-8`,
    ``,
    bodyText,
  ].join("\r\n");

  const encoded = Buffer.from(rawMessage)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const response = await connectors.proxy(
    "google-mail",
    "/gmail/v1/users/me/messages/send",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ raw: encoded }),
    }
  );

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Gmail API error: ${response.status} — ${err}`);
  }

  return await response.json();
}
