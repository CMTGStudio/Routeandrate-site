import type { Express } from "express";
import { type Server } from "http";
import { z } from "zod";
import { sendAuditRequestEmail } from "./gmail";

const contactSchema = z.object({
  name: z.string().min(1),
  brand: z.string().min(1),
  spend: z.string().min(1),
  threepl: z.string().min(1),
  notes: z.string().optional(),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    const parsed = contactSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid form data", details: parsed.error.issues });
    }

    try {
      await sendAuditRequestEmail(parsed.data);
      return res.json({ success: true });
    } catch (err) {
      console.error("Failed to send audit request email:", err);
      return res.status(500).json({ error: "Failed to send email" });
    }
  });

  return httpServer;
}
