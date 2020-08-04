let express = require("express");
let router = express.Router();

router.get("/reg", (req, res) => {
  res.render("reg");
});

router.post("/success-reg", (req, res) => {
  const { name } = req.body;

  res.render("success-reg", { name: name });
});

module.exports = router;
