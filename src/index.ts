import express, { Express } from "express";

import configureApp from "./config";
import router from "./routes";
import setupMiddleware from "./middleware";

const app: Express = express();

configureApp(app);
setupMiddleware(app);
router(app);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at https://localhost:${process.env.PORT}`);
});