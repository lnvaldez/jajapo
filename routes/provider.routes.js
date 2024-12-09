const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/provider");
});

router.get("/post-service", (req, res) => {
  if (req.session.user) {
    res.render("pages/post-service");
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
