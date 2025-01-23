import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_heCbGDf3zQy4@ep-tight-brook-a4g36eb6.us-east-1.aws.neon.tech/neondb?sslmode=require",
  }});
