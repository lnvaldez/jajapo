const express = require("express");
const router = express.Router();

router.get("/provider", (req, res) => {
  if (req.session.user) {
    res.render("pages/provider");
  } else {
    res.redirect("/login");
  }
});

router.get("/provider/post-service", (req, res) => {
  if (req.session.user) {
    res.render("pages/post-service");
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
