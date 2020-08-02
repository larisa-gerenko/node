let arr = process.argv;
let numbers = [];

for (i = 2; i < arr.length; i++) {
  numbers.push(Number(arr[i]));
}

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
