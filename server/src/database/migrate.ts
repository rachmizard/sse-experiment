import { migrate } from "drizzle-orm/better-sqlite3/migrator";

import { db, sqlite } from "./db";

migrate(db as unknown as any, {
  migrationsFolder: "./src/database/migrations",
});

sqlite.close();
