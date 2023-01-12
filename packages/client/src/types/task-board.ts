import { TaskListUI, TaskList } from "./task-list";


export type TaskBoardUI = {
  boardId: string;
  list: TaskListUI[]
  name: string;
};

export type TaskBoard = {
  _id: string;
  list: TaskList[]
  name: string;
};