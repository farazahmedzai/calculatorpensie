import { pgTable, text, serial, integer, boolean, timestamp, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(), // 'planificare', 'tipuri-pensii', 'legislatie'
  publishDate: text("publish_date").notNull(),
  readTime: integer("read_time").notNull(), // in minutes
  published: boolean("published").notNull().default(false),
});

export const pensionCalculations = pgTable("pension_calculations", {
  id: serial("id").primaryKey(),
  currentAge: integer("current_age").notNull(),
  monthlyIncome: real("monthly_income").notNull(),
  contributionYears: integer("contribution_years").notNull(),
  retirementAge: integer("retirement_age").notNull(),
  calculatedPension: real("calculated_pension").notNull(),
  calculationType: text("calculation_type").notNull(), // 'standard', 'early', 'pillar3'
  createdAt: text("created_at").notNull(),
});

export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  subscribedAt: text("subscribed_at").notNull(),
  active: boolean("active").notNull().default(true),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
});

export const insertArticleSchema = createInsertSchema(articles).omit({
  id: true,
});

export const insertPensionCalculationSchema = createInsertSchema(pensionCalculations).omit({
  id: true,
  createdAt: true,
});

export const insertNewsletterSubscriptionSchema = createInsertSchema(newsletterSubscriptions).omit({
  id: true,
  subscribedAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertArticle = z.infer<typeof insertArticleSchema>;
export type Article = typeof articles.$inferSelect;

export type InsertPensionCalculation = z.infer<typeof insertPensionCalculationSchema>;
export type PensionCalculation = typeof pensionCalculations.$inferSelect;

export type InsertNewsletterSubscription = z.infer<typeof insertNewsletterSubscriptionSchema>;
export type NewsletterSubscription = typeof newsletterSubscriptions.$inferSelect;
