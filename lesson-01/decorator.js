function pause(func, time) {
  return function (n) {
    setTimeout(function () {
      console.log("Факториал " + n + " равен " + func(n));
    }, time);
    console.log(`Функция выполниться с задержкой в ${time} милисекунды!`);
  };
}

function factorial(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
  }
  return f;
}

let paused = pause(factorial, 2000);
paused(14);
