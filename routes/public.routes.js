const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/home");
});

router.get("/about", (req, res) => {
  res.render("pages/about");
});

router.get("/contact", (req, res) => {
  res.render("pages/contact");
});

router.get("/services", (req, res) => {
  res.render("pages/services");
});

router.get("/login", (req, res) => {
  res.render("pages/login");
});

router.post("/login", (req, res) => {
  // Handle login logic here
});

router.get("/register", (req, res) => {
  res.render("pages/register");
});

router.post("/register", (req, res) => {
  // Handle register logic here
});

module.exports = router;
