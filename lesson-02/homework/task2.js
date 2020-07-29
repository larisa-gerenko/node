let http = require("http");
let fs = require("fs");
let filename = "data.txt";

fs.readFile(filename, "utf8", (err, data) => {
  if (err) {
    console.log("Could not find or open file for reading");
    return;
  }

  let arr = data.split(" ");
  let out1 = "";
  let out2 = "";

  arr.forEach((element) => {
    if (element % 2 == 0) {
      out1 += element + " ";
    }

    out2 += element ** 3 + " ";
  });

  fs.writeFile("out-1.txt", out1, (err) => {
    if (err) {
      console.log("Could not find or open file for reading");
      return;
    }
  });

  fs.writeFile("out-2.txt", out2, (err) => {
    if (err) {
      console.log("Could not find or open file for reading");
      return;
    }
  });
});
