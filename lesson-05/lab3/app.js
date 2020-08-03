let express = require("express");
let route = require("./routes/data.js");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use(route);

app.listen(80);
