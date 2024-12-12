const express = require("express");
const publicRoutes = require("./public.routes");
const publishRoutes = require("./publish.routes");
const errorRoutes = require("./error.routes");
const logoutRoute = require("./logout.routes");

module.exports = (app) => {
  app.use("/", publicRoutes);
  app.use("/publish", publishRoutes);
  app.use("/error", errorRoutes);
  app.use("/logout", logoutRoute);
};
