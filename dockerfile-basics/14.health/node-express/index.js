import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Welcome Home!"));

app.get("/health", (req, res) => {
  counter += 1;

  if (counter > 5) {
    res.status(500).send("Internal Server Error!")
  } else {
    res.send("Ok!")
  }
})

app.listen(3000, () => console.log(`Server running on port: 3000`));
