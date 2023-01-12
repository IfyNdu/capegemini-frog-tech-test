import { Router } from "express";
import { DbInstance, HttpStatusCode } from "frog-types";


export const card = (router: Router, _: DbInstance) => {

  router.get("/card", async (_, res) => {

    res.status(HttpStatusCode.OK).json({ response: "Hello World!" });
  });

  return router;
};
