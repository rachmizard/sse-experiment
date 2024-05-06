import { sql } from "drizzle-orm";
import {
  integer,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";
import { users } from "./user.schema";
import { groups } from "./group.schema";

export const userGroups = sqliteTable(
  "user_groups",
  {
    user_id: integer("user_id").references(() => users.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
    group_id: integer("group_id").references(() => groups.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
    approval_status: text("approval_status", {
      enum: ["pending", "approved", "rejected"],
    })
      .$type<"pending" | "approved" | "rejected">()
      .default("pending"),
    created_at: text("created_at").default(sql`(CURRENT_TIMESTAMP)`),
    updated_at: text("updated_at").default(sql`(CURRENT_TIMESTAMP)`),
  },
  (userGroups) => {
    return {
      nameIndex: uniqueIndex("name_idx").on(
        userGroups.user_id,
        userGroups.group_id
      ),
    };
  }
);

export type UserGroup = typeof userGroups.$inferSelect;
export type NewUserGroup = typeof userGroups.$inferInsert;
