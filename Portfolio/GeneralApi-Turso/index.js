import foo from "./server/schema/users.js";

import { db } from "./server/connections/connectTurso.js";

const insert = await db.insert(foo).values({
  // id: "1",
  name: "John",
}).run();

console.log(insert);

const result = await db.select().from(foo).all();

console.log(result);
