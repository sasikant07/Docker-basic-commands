import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env.APP_PORT;

const app = express();

app.get("/", (req, res) => res.send("Welcome Home!"));

app.get("/:id", (req, res) => {
  let id = req.params["id"];
  console.log(`Hello! ${id}`);
  res.send(`Hello! ${id}`);
});

app.listen(port, () => console.log(`Server running on port: ${port}`));
