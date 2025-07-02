import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

const foo = sqliteTable("users", {
  id: text("id"),
  name: text("name"),
});

export default foo;