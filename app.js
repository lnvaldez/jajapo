require("dotenv").config();

const express = require("express");
const session = require("cookie-session");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const connectDB = require("./config/db.config");

const app = express();
const routes = require("./routes");
const cookieParser = require("cookie-parser");

const PORT = process.env.EXPRESS_PORT || 5000;

app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(
  session({
    secret: process.env.SESSION_SECRET || "fallback-secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

app.set("view engine", "ejs");
app.set("layout", "layout");
app.locals.year = new Date().getFullYear();

connectDB().catch(console.error);

routes(app);
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`⭐ Express server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
