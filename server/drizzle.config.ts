import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/database/schema",
  out: "./src/database/migrations",
  driver: "better-sqlite",
  dbCredentials: {
    url: "./sqlite.db",
  },
  verbose: true,
  strict: true,
});
