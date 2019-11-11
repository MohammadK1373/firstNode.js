const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // res.send("HELLO FUCKING WORLD!!!");
  res.render("index", {
    title: "MY Express App",
    message: "HELLO FUCKING WORLD!!!"
  });
});

module.exports = router;
