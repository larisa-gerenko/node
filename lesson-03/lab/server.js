// Задача 1

const http = require("http");
const fs = require("fs");

http
  .createServer((require, response) => {
    if (process.argv[2] == "en") {
      fs.readFile("en.html", "utf8", (err, data) => {
        if (err) {
          console.log("Could not find or open file for reading\n");
          response.statusCode = 404;
          response.end();
        } else {
          console.log(`The file en.html is read and sent to the client\n`);
          response.writeHead(200, { "Content-Type": "text/html" });
          response.end(data);
        }
      });
    } else if (process.argv[2] == "ru") {
      fs.readFile("ru.html", "utf8", (err, data) => {
        if (err) {
          console.log("Could not find or open file for reading\n");
          response.statusCode = 404;
          response.end();
        } else {
          console.log(`The file ru.html is read and sent to the client\n`);
          response.writeHead(200, { "Content-Type": "text/html" });
          response.end(data);
        }
      });
    }
  })
  .listen(8080, () => {
    console.log("HTTP server works in 8080 port!\n");
  });
