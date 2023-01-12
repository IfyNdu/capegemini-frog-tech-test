import { TaskBoard, TaskBoardUI } from "../types";


/**
* Decouple server from client and convert data into UI model
*/

export const boardTransformer = ({ _id, list, name }: TaskBoard): TaskBoardUI => {
  return {
    boardId: _id,
    list: list.map(item => {
      return {
        cards: item.cards.map(card => {
          return {
            createdAt: card.createdAt,
            description: card.description,
            dueDate: card.dueDate,
            image: card.image,
            imageHeight: 160,
            title: card.title,
            uid: card._id
          }
        }),
        name: item.name,
        uid: item._id,
      }
    }),
    name,
  }
};