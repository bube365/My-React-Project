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

const myServer = http.createServer((req, res) => {
  console.log("Incoming Request");
  console.log(req.method);

  if (req.method === "POST") {
    let body = "";

    req.on("end", () => {
      const username = body.split("=")[1];
      console.log(username);
      res.end(`<h1>${username}</h1>`);
    });

    req.on("data", (chunk) => {
      body += chunk;
    });
  } else {
    res.setHeader("Content-Type", "text/html");

    res.end(
      "<form method='POST'><input type='text' name='username' /><button>Create User</button></form>"
    );
  }
});

myServer.listen(5000);

// handle post request ... send request and get a response

const express = require("express");

const app = express();

// This express middleware takes in 3 arguments ... the response, request and a next

// . req takes in a text in string and a function

app.use((req, res, next) => {
  let body = "";

  req.on("end", () => {
    const username = body.split("=")[1];
    if (username) {
      req.body = { name: username };
    }
    next();
  });

  req.on("data", (chunks) => {
    body += chunks;
  });
});

app.use((req, res, next) => {
  if (req.body) {
    res.send("<h1>" + req.body.name + "</h1>");
  }
  res.send(
    "<form method='POST'><input type='text' name='username' /><button>Create User</button></form>"
  );
});

app.listen(5001);

////

const myNewExpress = express();

const bodyparser = require("body-parser");

myNewExpress.use(bodyparser.urlencoded({ extended: false }));

// get and post get atleast two argument /... add urlbefore function '/'

myNewExpress.post("/user", (req, res, next) => {
  res.send("<h1>" + req.body.username + "</h1>");
});

myNewExpress.get("/", (req, res, next) => {
  res.send(
    "<form action='/user' method='POST'><input type='text' name='username' /><button>Create User</button></form>"
  );
});

myNewExpress.listen(5002);
