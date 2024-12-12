const { Service } = require("../models");
const cloudinary = require("cloudinary").v2;

const publishService = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const serviceData = {
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price,
      phone: req.body.phone,
      location: req.body.location,
      bannerImage: req.file.path,
    };

    const service = new Service(serviceData);
    await service.save();

    return res.status(201).json({
      message: "Service published successfully",
      service,
    });
  } catch (error) {
    if (req.file?.filename) {
      await cloudinary.uploader.destroy(req.file.filename);
    }

    if (error.name === "ValidationError") {
      console.log(error.message);
      return res.redirect("/error/404");
    }

    console.log(error.message);
    return res.redirect("/error/404");
  }
};

module.exports = { publishService };
