let express = require("express");
let router = express.Router();

router.post("/somepath", (req, res) => {
  const { name, email, password } = req.body;

  res.send(`Логин: ${name}, Пароль: ${password}, Email: ${email}`);
});

module.exports = router; //Экспортируем роутер из модуля
