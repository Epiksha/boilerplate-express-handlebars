import { engine } from "express-handlebars";
import { Express } from "express";
import path from "path";

export default (app: Express) => {
  app.engine("hbs", engine({
    defaultLayout: "main",
    extname: ".hbs",
  }));
  app.set("view engine", "hbs");
  app.set("views", path.join(__dirname, "../", "views"));
};
