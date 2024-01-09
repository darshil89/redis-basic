const client = require("./client");

async function get(key) {
  await client.set("user:5", "Khushi");
//   await client.expire("user:5", 10);
  const result = await client.get("user:5");
  console.log("Result =>", result);
}

get();
