const express = require("express");
const axios = require("axios").default;
const client = require("./client");

const app = express();

app.get("/", async (req, res) => {
  const cachedData = await client.get("todos");

  if (cachedData) {
    console.log("Serving from cache");
    return res.json(JSON.parse(cachedData));
  }
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  await client.set("todos", JSON.stringify(data));
  await client.expire("todos", 10);

  return res.json(data);
});

app.listen(9000, () => {
  console.log("Server is listening on port 9000");
});
