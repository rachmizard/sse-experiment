import { sql } from "drizzle-orm";
import {
  integer,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";
import { groups } from "./group.schema";
import { users } from "./user.schema";

export const userGroupChats = sqliteTable(
  "user_group_chats",
  {
    id: integer("id").primaryKey(),
    message: text("message"),
    created_at: text("created_at").default(sql`(CURRENT_TIMESTAMP)`),
    updated_at: text("updated_at").default(sql`(CURRENT_TIMESTAMP)`),
    group_id: integer("group_id").references(() => groups.id, {
      onDelete: "set null",
    }),
    user_id: integer("user_id").references(() => users.id, {
      onDelete: "set null",
    }),
  },
  (table) => {
    return {
      nameIndex: uniqueIndex("user_group_chats_idx").on(
        table.user_id,
        table.group_id
      ),
    };
  }
);
