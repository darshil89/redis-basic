const client = require("./client");

async function init() {
  await client.rpush("messages", "Darshil");
  await client.rpush("messages", "Khushi");
 
  const result = await client.lpop("messages");
  console.log("Result =>", result);
}

init();
