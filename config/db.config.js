require("dotenv").config();
const mongoose = require("mongoose");

const DB_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error: ", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
