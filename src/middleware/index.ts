import { Express } from "express";
import spritesheet from "./spritesheet";

export default (app: Express) => {
  app.use(spritesheet());
};
