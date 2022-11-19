import { Express, Request, Response } from "express";

const routes = [
  { url: "/", template: "home" },
  { url: "/styleguide", template: "styleguide" },
]

export default (app: Express) => {
  routes.forEach(route => {
    app.get(route.url, (request: Request, response: Response) => {
      response.render(route.template);
    });
  });
};
