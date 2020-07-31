// Задача 1

// const http = require("http");
// const fs = require("fs");

// http
//   .createServer((require, response) => {
//     if (process.argv[2] == "en") {
//       fs.readFile("en.html", "utf8", (err, data) => {
//         if (err) {
//           console.log("Could not find or open file for reading\n");
//           response.statusCode = 404;
//           response.end();
//         } else {
//           console.log(`The file en.html is read and sent to the client\n`);
//           response.writeHead(200, { "Content-Type": "text/html" });
//           response.end(data);
//         }
//       });
//     } else if (process.argv[2] == "ru") {
//       fs.readFile("ru.html", "utf8", (err, data) => {
//         if (err) {
//           console.log("Could not find or open file for reading\n");
//           response.statusCode = 404;
//           response.end();
//         } else {
//           console.log(`The file ru.html is read and sent to the client\n`);
//           response.writeHead(200, { "Content-Type": "text/html" });
//           response.end(data);
//         }
//       });
//     }
//   })
//   .listen(8080, () => {
//     console.log("HTTP server works in 8080 port!\n");
//   });

// Задача 2

const http = require("http");
const cp = require("child_process");
const child = cp.fork("./child.js");

http
  .createServer((request, response) => {
    child.send({
      //методу send передается объект, который будет передан дочернему процессу
      method: request.method, //свойство хранит http метод присланного запроса
      params: request.url, //свойство хранит url присланного запроса
    });

    response.statusCode = 200;
    response.end();
  })
  .listen(8080, () => {
    console.log("Server run in 8080 port!");
  });
