import { Router } from "express";
import { DbInstance, HttpStatusCode } from "frog-types";
import { Models } from "../../db";


export const board = (router: Router, db: DbInstance) => {

  router.get("/board", async (_, res) => {

    try {
      const board = await Models.Board.findOne().populate({
        path: "list", populate: {
          path: "cards",
        }
      }).exec()

      res.status(HttpStatusCode.OK).json({ response: { board } });
    } catch (error) {
      throw error;
    }
  });

  router.post("/board", async (req, res) => {

    try {
      const { name } = req.body;

      const newBoard = {
        _id: new db.Types.ObjectId(),
        name,
      };

      const Board = new Models.Board(newBoard);

      await Board.save();

      res.status(HttpStatusCode.OK).json({ response: newBoard });
    } catch (error) {
      throw error;
    }
  });

  router.post("/board/list/:id", async (req, res) => {

    try {
      const { name } = req.body.data;
      const { id } = req.params;

      const newList = {
        _id: new db.Types.ObjectId(),
        name,
      };

      const List = new Models.List(newList);

      await List.save();
      await Models.Board.findByIdAndUpdate({ _id: id }, {
        $push: {
          list: {
            _id: List._id,
            name: List.name
          }
        },
      });

      res.status(HttpStatusCode.OK).json({ response: [newList] });
    } catch (error) {
      throw error;
    }
  });

  return router;
}
