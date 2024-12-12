const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/service.controller");
const upload = require("../middleware/upload.middleware");

router.get("/", (req, res) => {
  if (req.session.user) {
    res.render("pages/publish");
  } else {
    res.redirect("/login");
  }
});

router.post(
  "/",
  upload.single("bannerImage"),
  serviceController.publishService
);

module.exports = router;
