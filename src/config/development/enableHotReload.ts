import connectLiveReload from "connect-livereload";
import { Express } from "express";
import liveReload from "livereload";

export default (app: Express) => {
  const liveReloadServer = liveReload.createServer();
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });

  app.use(connectLiveReload());
};
