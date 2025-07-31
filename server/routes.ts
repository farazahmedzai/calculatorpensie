import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertPensionCalculationSchema, insertNewsletterSubscriptionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Get recent articles for homepage
  app.get("/api/articles/recent", async (req, res) => {
    try {
      const articles = await storage.getRecentArticles(3);
      res.json(articles);
    } catch (error) {
      console.error("Error fetching recent articles:", error);
      res.status(500).json({ message: "Error fetching articles" });
    }
  });

  // Get all articles with optional filtering
  app.get("/api/articles", async (req, res) => {
    try {
      const { category, published } = req.query;
      const articles = await storage.getArticles({
        category: category as string,
        published: published === "true",
      });
      res.json(articles);
    } catch (error) {
      console.error("Error fetching articles:", error);
      res.status(500).json({ message: "Error fetching articles" });
    }
  });

  // Get article by slug
  app.get("/api/articles/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const article = await storage.getArticleBySlug(slug);
      
      if (!article) {
        return res.status(404).json({ message: "Article not found" });
      }
      
      res.json(article);
    } catch (error) {
      console.error("Error fetching article:", error);
      res.status(500).json({ message: "Error fetching article" });
    }
  });

  // Save pension calculation
  app.post("/api/calculations", async (req, res) => {
    try {
      const validatedData = insertPensionCalculationSchema.parse({
        ...req.body,
        createdAt: new Date().toISOString(),
      });
      
      const calculation = await storage.createPensionCalculation(validatedData);
      res.status(201).json(calculation);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid calculation data", 
          errors: error.errors 
        });
      }
      console.error("Error saving calculation:", error);
      res.status(500).json({ message: "Error saving calculation" });
    }
  });

  // Get user calculations (for potential future use)
  app.get("/api/calculations", async (req, res) => {
    try {
      const calculations = await storage.getRecentCalculations(10);
      res.json(calculations);
    } catch (error) {
      console.error("Error fetching calculations:", error);
      res.status(500).json({ message: "Error fetching calculations" });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse({
        ...req.body,
        subscribedAt: new Date().toISOString(),
      });
      
      // Check if email already exists
      const existingSubscription = await storage.getNewsletterSubscriptionByEmail(validatedData.email);
      if (existingSubscription) {
        if (existingSubscription.active) {
          return res.status(400).json({ message: "Email already subscribed" });
        } else {
          // Reactivate subscription
          const updated = await storage.updateNewsletterSubscription(existingSubscription.id, { active: true });
          return res.json({ message: "Subscription reactivated", subscription: updated });
        }
      }
      
      const subscription = await storage.createNewsletterSubscription(validatedData);
      res.status(201).json({ 
        message: "Successfully subscribed to newsletter", 
        subscription 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid email data", 
          errors: error.errors 
        });
      }
      console.error("Error subscribing to newsletter:", error);
      res.status(500).json({ message: "Error subscribing to newsletter" });
    }
  });

  // Unsubscribe from newsletter
  app.post("/api/newsletter/unsubscribe", async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
      
      const subscription = await storage.getNewsletterSubscriptionByEmail(email);
      if (!subscription) {
        return res.status(404).json({ message: "Subscription not found" });
      }
      
      await storage.updateNewsletterSubscription(subscription.id, { active: false });
      res.json({ message: "Successfully unsubscribed from newsletter" });
    } catch (error) {
      console.error("Error unsubscribing from newsletter:", error);
      res.status(500).json({ message: "Error unsubscribing from newsletter" });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "healthy", 
      timestamp: new Date().toISOString(),
      version: "1.0.0"
    });
  });

  // Statistics endpoint (for potential admin use)
  app.get("/api/stats", async (req, res) => {
    try {
      const stats = await storage.getSystemStats();
      res.json(stats);
    } catch (error) {
      console.error("Error fetching stats:", error);
      res.status(500).json({ message: "Error fetching statistics" });
    }
  });

  // SEO: Sitemap.xml
  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = "https://calculatorpensie.com";
    const currentDate = new Date().toISOString().split('T')[0];
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/planificare</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/tipuri-pensii</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/legislatie</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/despre-noi</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/metodologie</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/politica-confidentialitate</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${baseUrl}/faq</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

    res.set('Content-Type', 'text/xml');
    res.send(sitemap);
  });

  // SEO: Robots.txt
  app.get("/robots.txt", (req, res) => {
    const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://calculatorpensie.com/sitemap.xml

# Block search engines from indexing admin or sensitive areas
Disallow: /api/
Disallow: /admin/

# Specific crawler instructions
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Crawl delay for general bots
Crawl-delay: 1`;

    res.set('Content-Type', 'text/plain');
    res.send(robotsTxt);
  });



  const httpServer = createServer(app);
  return httpServer;
}
