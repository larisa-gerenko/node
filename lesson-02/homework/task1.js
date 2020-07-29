// Задача 1

// function* generateSequence(start, end) {
//   for (let i = start; i <= end; i++) yield i;
// }

// function* generatePasswordCodes() {
//   yield* generateSequence(65, 90);
//   yield* generateSequence(97, 122);
// }

// let str = "";

// for (let code of generatePasswordCodes(length)) {
//   str += String.fromCharCode(code);
// }

// function password_generator(len) {
//   let password = "";

//   for (let i = 0; i < len; i++) {
//     password += str.charAt(Math.floor(Math.random() * str.length));
//   }
//   return password;
// }

// let pass = password_generator(16);
// console.log(pass);
