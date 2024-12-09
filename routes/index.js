const express = require("express");
const publicRoutes = require("./public.routes");
const providerRoutes = require("./provider.routes");
const errorRoutes = require("./error.routes");
const logoutRoute = require("./logout.routes");

module.exports = (app) => {
  app.use("/", publicRoutes);
  app.use("/provider", providerRoutes);
  app.use("/error", errorRoutes);
  app.use("/logout", logoutRoute);
};
