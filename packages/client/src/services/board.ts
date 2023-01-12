import axios from "axios";
import { TaskBoard, TaskList } from "../types";
import { boardTransformer } from "../utils";


/**
* Gets user's board from the server (Assuming only 1 board is available)
*/

export const getBoard = async () => {
  const { data } = await axios
    .get<{ response: { board: TaskBoard } }>("http://localhost:1234/api/board");
  const { board } = data.response;

  return boardTransformer(board);
};

/**
* Adds a new list to the active board
*/

export const addList = async (boardId: string, payload: Pick<TaskList, "name">) => {
  const { statusText } = await axios
    .post<{ response: TaskList[] }>(`http://localhost:1234/api/board/list/${boardId}`, {
      data: payload
    });

  return statusText;
};
