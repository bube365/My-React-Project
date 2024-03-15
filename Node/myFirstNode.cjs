const myname = "Austin";

const myfilesystem = require("fs");

myfilesystem.writeFile(
  "Node/userData-textFile.txt",
  "Name: " + myname,
  (err) => {
    if (err) {
      console.log("An Error Occured");
      return;
    }
    console.log("Write File was successful");
  }
);

// A new nodemodule ... http api is a node module ...it also have the method of creating server

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Incoming request");
  console.log(req.method, req.url);

  res.setHeader("Content-Type", "text/plain");

  res.end(`{ message: "Your first server creation was successful" }`);
});

server.listen(5000);
