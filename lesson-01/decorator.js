function pause(func, time) {
  return function () {
    setTimeout(this.func, this.time);
    console.log(time);
    console.log(`Функция выполниться с задержкой в ${time} секунды!`);
    return result;
  };
}

function factorial(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
  }
  return f;
}

let paused = pause(factorial, 20000);

console.log("Факториал 14 равен " + paused(14));
