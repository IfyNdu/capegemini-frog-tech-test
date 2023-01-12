import { Router } from "express";
import { DbInstance } from "frog-types";
import { board } from "./board/board";
import { card } from "./card/card";
import { list } from "./list/list";

export const routes = (router: Router, db: DbInstance) => {

  router.use("/board", board(router, db));
  router.use("/card", card(router, db));
  router.use("/list", list(router, db));

  return router;
}