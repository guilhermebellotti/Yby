import express, { response } from "express";

const app = express();

app.get("/users", (req, res) => {
  console.log("Listagem de usuários");
  res.json(["Guilherme", "Juninho"]);
});

app.listen(3333);
