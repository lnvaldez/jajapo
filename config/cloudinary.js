const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "service_banners",
    allowedFormats: ["jpeg", "png", "jpg"],
    transformation: [{ width: 1000, height: 500, crop: "scale" }],
  },
});

module.exports = { cloudinary, storage };
