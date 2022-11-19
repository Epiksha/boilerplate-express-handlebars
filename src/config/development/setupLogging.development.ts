import { Express } from "express";
import logger from "morgan";

export default (app: Express) => {
  app.use(logger("dev"));
};
