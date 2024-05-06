CREATE TABLE `user_group_chats` (
	`id` integer PRIMARY KEY NOT NULL,
	`message` text,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP),
	`group_id` integer,
	`user_id` integer,
	FOREIGN KEY (`group_id`) REFERENCES `groups`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
ALTER TABLE user_groups ADD `approval_status` text DEFAULT 'pending';--> statement-breakpoint
CREATE UNIQUE INDEX `user_group_chats_idx` ON `user_group_chats` (`user_id`,`group_id`);