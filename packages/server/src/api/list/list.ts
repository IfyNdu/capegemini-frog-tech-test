import { Router } from "express";
import { DbInstance, HttpStatusCode } from "frog-types";
import { Models } from "../../db";


export const list = (router: Router, db: DbInstance) => {

  router.post("/list/card/:id", async (req, res) => {

    try {
      const { description, dueDate, image, title, } = req.body.data;
      const { id } = req.params;

      const newCard = {
        _id: new db.Types.ObjectId(),
        description,
        dueDate,
        image,
        title
      };

      const Card = new Models.Card(newCard);

      await Card.save();
      await Models.List.findByIdAndUpdate({ _id: id }, {
        $push: {
          cards: {
            _id: Card._id,
            description: Card.description,
            title: Card.title
          }
        },
      });

      res.status(HttpStatusCode.OK).json({ response: [newCard] });
    } catch (error) {
      throw error;
    }
  });

  router.delete("/list/card/:id", async (req, res) => {

    try {
      const { cardId } = req.body;
      const { id } = req.params;

      const data = await Models.Card.findOne({ _id: cardId });
      data && await data.remove();

      await Models.List.updateOne({ _id: id }, {
        $pullAll: {
          cards: [{
            _id: cardId
          }]
        }
      });

      res.status(HttpStatusCode.OK).json({ response: data, listId: id, cardId });
    } catch (error) {
      throw error;
    }
  })

  return router;
};
