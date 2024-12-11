const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  req.session = null;

  res.clearCookie("session");
  res.clearCookie("session.sig");

  res.redirect("/login");
});

module.exports = router;
