const express = require("express");
const router = express.Router();
const { Service } = require("../models");
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

router.get("/services", async (req, res) => {
  try {
    const approvedServices = await Service.find({ isApproved: true });

    if (approvedServices.length > 0) {
      res.render("pages/services", { approvedServices });
    } else {
      res.render("pages/services", {
        approvedServices: [],
        message: "No approved services available",
      });
    }
  } catch (error) {
    return res.redirect("/error/404");
  }
});

router.get("/services/:category/:id", async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    console.log(service.bannerImage);
    res.render("pages/service-detail", { service });
  } catch (error) {
    return res.redirect("/error/404");
  }
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
