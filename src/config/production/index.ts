import { Express } from "express";
import setupLoggingProduction from "./setupLogging.production";

export default (app: Express) => {
  setupLoggingProduction(app);
};