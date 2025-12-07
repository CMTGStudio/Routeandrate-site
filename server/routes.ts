import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEnquirySchema } from "@shared/schema";
import { fromError } from "zod-validation-error";
import { sendEnquiryNotification } from "./gmail";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/enquiries", async (req, res) => {
    try {
      const parsed = insertEnquirySchema.safeParse(req.body);
      
      if (!parsed.success) {
        const validationError = fromError(parsed.error);
        return res.status(400).json({ error: validationError.message });
      }

      const enquiry = await storage.createEnquiry(parsed.data);
      
      try {
        await sendEnquiryNotification(parsed.data);
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
      }
      
      return res.status(201).json(enquiry);
    } catch (error) {
      console.error("Error creating enquiry:", error);
      return res.status(500).json({ error: "Failed to submit enquiry" });
    }
  });

  app.get("/api/enquiries", async (_req, res) => {
    try {
      const enquiries = await storage.getEnquiries();
      return res.json(enquiries);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
      return res.status(500).json({ error: "Failed to fetch enquiries" });
    }
  });

  return httpServer;
}
