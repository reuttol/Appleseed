const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const users = [
  {
    name: "Reut",
    email: "fake-email@domain.com",
  },
  {
    name: "Jenny",
    email: "fake-email2@domain.com",
  },
];

const server = http.createServer((req, res) => {
  if (req.method !== "GET") return;
  
  if (req.url === "/raw-html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>welcome</h1>");
    res.end();
  }
  if (req.url === "/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(users));
    res.end();
  }
  if (req.url === "/") {
    const htmlPath = path.join(__dirname, "./public/index.html");

    fs.readFile(htmlPath, function (error, data) {
      if (error) {
        res.writeHead(404);
        res.write("File not found!");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
      }
      res.end();
    });
  }
  if (req.url === "/index.css") {
    fs.readFile(
      path.join(__dirname, "./public/index.css"),
      function (error, data) {
        if (error) {
          res.writeHead(404);
          res.write("File not found!");
        } else {
          res.writeHead(200, { "Content-Type": "text/css" });
          res.write(data);
        }
        res.end();
      }
    );
  }
  if (req.url === "/index.js") {
    fs.readFile(
      path.join(__dirname, "./public/index.js"),
      function (error, data) {
        if (error) {
          res.writeHead(404);
          res.write("File not found!");
        } else {
          res.writeHead(200, { "Content-Type": "text/javascript" });
          res.write(data);
        }
        res.end();
      }
    );
  }
});

server.listen(PORT, (error) => {
  if (error) {
    return console.error(error);
  }

  console.log(`Server listening on port ${PORT}`);
});
