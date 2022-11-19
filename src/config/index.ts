import dotenv from "dotenv";
import express, { Express } from "express";

import configureDevelopment from "./development";
import configureProduction from "./production";
import setupTemplateEngine from "./setupTemplateEngine";

export default (app: Express) => {
  dotenv.config();
  app.use(express.static("public"));

  if (process.env.NODE_ENV === "development") {
    configureDevelopment(app);
  } else if (process.env.NODE_ENV === "production") {
    configureProduction(app);
  }

  setupTemplateEngine(app);
};
