const http = require("http");
const cp = require("child_process");
const url = require("url");

const child = cp.fork("./child.js");

let childReady = false;

function childSaidReady(status) {
  if (status === "ready") {
    childReady = true;
    child.off("message", childSaidReady); //Удаляет ранее прикреплённого слушателя
    console.log("Server ready");
  }
}
child.on("message", childSaidReady);

http
  .createServer((request, response) => {
    //код обработки http запроса
    let _get = url.parse(request.url, true).query;
    console.log("Parametrs of request: " + JSON.stringify(_get));
    if (!(_get.num1 && _get.num2)) {
      console.log("Bad Request");
      response.statusCode = 400;
      response.end();
      return;
    }

    if (!childReady) {
      console.log("Service Unavailable");
      response.statusCode = 503;
      response.end();
      return;
    }

    let expression = `${_get.num1}+${_get.num2}=`;

    function responseFromChild(data) {
      if (data.expression === expression) {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(`<h1>${data.result}</h1>`);
        response.end();
        child.off("message", responseFromChild);
      }
    }

    child.on("message", responseFromChild);

    child.send({
      expression,
    });
  })
  .listen(8080, () => {
    console.log("Server run in 8080 port!");
  });


//   Дополнительно: исследуйте работу нейронной сети, для этого проанализируйте данные по
// которым обучается нейронная сеть. Эти данные расположены в файле mathData.json. Удалите один
// любой элемент из этого массива, например "9+5=14". Перезапустите сервер, и когда он будет готов
// отправьте
// через
// браузер
// url
// с
// параметрами
// http://localhost:8080?num1=9&num2=5. Посмотрите какой придёт результат. На какие мысли
// подталкивает полученный результат?


 Судя по всему нейронная сеть не умеет менять местами слагаемые и ее надо обучать каждому примеру в отдельности. 