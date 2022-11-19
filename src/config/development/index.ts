import { Express } from "express";

import enableHotReload from "./enableHotReload";
import setupLoggingDevelopment from "./setupLogging.development";

export default (app: Express) => {
  enableHotReload(app);
  setupLoggingDevelopment(app);
};
