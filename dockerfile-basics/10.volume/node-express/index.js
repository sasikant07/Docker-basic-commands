import express from "express";
import * as dotenv from "dotenv";
import fs from "fs";
import path from "path";
dotenv.config();

const port = process.env.APP_PORT;
const app_data = process.env.APP_DATA;

const app = express();

app.get("/", (req, res) => res.send("Welcome Home!"));

app.get("/:id", (req, res) => {
  let id = req.params["id"];
  console.log(`Hello! ${id}`);

  // Content to write into file
  const content = `Hello! ${id}`;
  const filename = `${id}.txt`;
  const filePath = path.join(app_data, filename);

  // Write to the file
  fs.writeFileSync(filePath, content, (err) => {
    if (err) {
      console.error("Error writting to file: ", err);
    } else {
      console.log("FIle successfully written");
    }
  });
  res.send(`Hello! ${id}`);
});

app.listen(port, () => console.log(`Server running on port: ${port}`));
