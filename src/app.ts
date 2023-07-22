import express from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";

const port = config.get<number>("PORT");
const app = express();

function init() {
  connect()
    .then((dbRes) => {
      if (dbRes?.connections?.length === 1) {
        app.listen(port, () => {
          logger.info(`listening on port : ${port}`);
        });
        routes(app);
      }
    })
    .catch((err) => {
      logger.error(err.message);
      process.exit();
    });
}
init();
