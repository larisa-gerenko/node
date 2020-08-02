const fs = require("fs");

const data = fs.readFileSync(process.argv[2]).toString();
console.log(data.split("\n").length - 1);
