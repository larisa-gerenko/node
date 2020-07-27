// Задача 1
// const http = require("http");

// const server = http
//   .createServer((request, response) => {
//     console.log("HTTP works!");
//   })
//   .listen(8080);

// Задача 2

// const http = require("http");

// const server = http
//   .createServer((request, response) => {
//     console.log("HTTP works!");
//     response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });

//     response.write(
//       `<h1>Заголовок</h1>
//         <p>Первый абзац.</p>
//         <p>Второй абзац.</p>`
//     );

//     response.end();
//   })
//   .listen(8080);

// Задача 3

const http = require("http");
const fs = require("fs");
const server = new http.Server();

server.on("request", function (req, res) {
  let header, body, footer;

  fs.readFile("header.html", "utf8", function (err, data1) {
    if (err) {
      res.writeHead(500);
      res.end();
    } else {
      header = data1;

      if (body && footer) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(header + body + footer);
      }
    }
  });

  fs.readFile("body.html", "utf8", function (err, data2) {
    if (err) {
      res.writeHead(500);
      res.end();
    } else {
      body = data2;

      if (header && footer) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(header + body + footer);
      }
    }
  });

  fs.readFile("footer.html", "utf8", function (err, data3) {
    if (err) {
      res.writeHead(500);
      res.end();
    } else {
      footer = data3;
      if (body && header) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(header + body + footer);
      }
    }
  });
});

server.listen(8080, () => {
  console.log("HTTP server works in 8080 port!\n");
});
