let express = require("express");
let app = express();

let route = require("./routes/products.js");

app.use(
  "/products",
  route
); /*регистрируем роут, все url начинающиеся с /products будут
передаваться в обработку в этот роут*/
app.listen(3000); //Настраиваем express приложение слушать запросы на 3000 порту
