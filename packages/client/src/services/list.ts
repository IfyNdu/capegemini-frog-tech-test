import axios from "axios";
import { TaskCard } from "../types";


/**
* Deletes card from a list
*/

export const deleteCard = async (cardId: string, listId: string) => {
  const { statusText } = await axios
    .delete(`http://localhost:1234/api/list/card/${listId}`, {
      data: { cardId }
    });

  return statusText;
};

/**
* Adds card to a list
*/

export const addCard = async (listId: string, payload: Omit<TaskCard, "_id" | "createdAt">) => {
  const { statusText } = await axios
    .post(`http://localhost:1234/api/list/card/${listId}`, {
      data: payload
    });
  return statusText;
};
