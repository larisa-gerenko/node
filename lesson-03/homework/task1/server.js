let http = require("http");
let fs = require("fs");
let path = require("path");

http
  .createServer((request, response) => {
    let filename = "404";

    if (request.url === "/") {
      filename = "index.html";
    } else if (request.url === "/ajax") {
      filename = "ajax.html";
    }

    fs.readFile(filename, "utf8", (err, data) => {
      if (err) {
        console.log("Could not find or open file for reading\n");
        response.statusCode = 404;
        response.end();
      } else {
        response.writeHead(200, {
          "Content-Type": "text/html",
        });
        response.end(data);
      }
    });
  })
  .listen(8080, () => {
    console.log("HTTP server works in 8080 port!\n");
  });
