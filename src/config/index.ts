import dotenv from "dotenv";
import express, { Express } from "express";

import setupDevEnvironment from "./development";
import setupTemplateEngine from "./setupTemplateEngine";

export default (app: Express) => {
  dotenv.config();
  app.use(express.static("public"));

  if (process.env.NODE_ENV === "development") {
    setupDevEnvironment(app);
  } else if (process.env.NODE_ENV === "production") {
  }
  
  setupTemplateEngine(app);
};
