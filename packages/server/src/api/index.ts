import express, { Router } from "express";
import { DbInstance } from "frog-types";
import { routes } from "./routes";


const app = express(),
  router = Router();
const PORT = process.env.APP_PORT;
const whiteListedOrigins = [
  "http://localhost:2345",
  "http://127.0.0.1:2345"
];
const headers = ["Origin", "X-Requested-With", "Content-Type", "Accept"];
const methods = ["GET", "DELETE", "POST"];

export const Api = {

  init: (db: DbInstance) => {

    app.use((req, res, next) => {

      const origin = whiteListedOrigins.includes(req.header("origin")) ? req.headers.origin : "not-allowed"
      res.set("Access-Control-Allow-Origin", origin);
      res.set("Access-Control-Allow-Headers", headers.join(","));
      res.set("Access-Control-Allow-Methods", methods.join(","));
      next();
    });
    app.use(express.json());
    app.use("/api", routes(router, db));

    app.listen(PORT, () => {
      console.info(`[SERVER] is listening on ${PORT}`);
    });
  }
};
