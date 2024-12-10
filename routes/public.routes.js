const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

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
  res.render("pages/login", { layout: false });
});

router.post("/login", userController.login);

router.get("/register", (req, res) => {
  res.render("pages/register", { layout: false });
});

router.post("/register", userController.register);

module.exports = router;
