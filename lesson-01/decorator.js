// Задача 1

// function pause(func, time) {
//   return function (n) {
//     setTimeout(function () {
//       console.log("Факториал " + n + " равен " + func(n));
//     }, time);
//     console.log(`Функция выполниться с задержкой в ${time} милисекунды!`);
//   };
// }

// function factorial(n) {
//   let f = 1;
//   for (let i = 1; i <= n; i++) {
//     f *= i;
//   }
//   return f;
// }

// let paused = pause(factorial, 2000);
// paused(14);

// Задача 2

function returnOblect(func, ...keys) {
  const obj = {};
  let values = func();

  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
  }

  return function () {
    return obj;
  };
}

function arr() {
  return [1, 2, 3];
}

let funcDecoreted = returnOblect(arr, "one", "two", "three");

let r = funcDecoreted();

console.log(r.one);
