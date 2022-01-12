const express = require("express");

const app = express();
const PORT = 3000;
const numbers = [1, 2, 3, 4, 5, 6];

app.use(express.json());

app.get("/numbers", (req, res) => {
  res.send(numbers);
});

app.post("/numbers", (req, res) => {
  const id = parseInt(req.body.num);
  if (numbers.includes(id)) return res.status(400).send(`The ${id} number already exists!`);
  numbers.push(id);
  res.send(numbers);
});

app.put("/numbers", (req, res) => {
  const id = parseInt(req.body.num);
  const replace = parseInt(req.body.replaceNum);
  const index = numbers.indexOf(id);
  if (index === -1) return res.status(400).send(`The ${id} number not found!`);

  numbers.splice(index, 1, replace);
  res.send(numbers);
});

app.delete("/numbers", (req, res) => {
  const id = parseInt(req.body.num);
  const index = numbers.indexOf(id);
  if (index === -1) return res.status(400).send(`The ${id} number not found!`);

  numbers.splice(index, 1);
  res.send(numbers);
});

app.listen(3000, () => {
  console.log(`Listening to port ${PORT}`);
});
