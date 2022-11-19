import express, { Express, Request, Response } from "express";

const router = express.Router();

router.get("/", (request: Request, response: Response) => {
  response.render("home");
});

export default (app: Express) => {
  app.get("/", router);
};