let express = require("express");
let route = require("./routes/data.js");
let bodyParser = require("body-parser");
let app = express();
let mustacheExpress = require("mustache-express");

app.set("views", __dirname + "/views");
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(route);

app.listen(80);
