const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  if (req.session.user) {
    res.render("pages/publish");
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
