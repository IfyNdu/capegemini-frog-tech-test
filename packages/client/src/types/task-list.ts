import { TaskCard, TaskCardUI } from "./task-card";


export type TaskListUI = {
  cards: TaskCardUI[];
  name: string;
  uid: string;
};

export type TaskList = {
  _id: string;
  cards: TaskCard[];
  name: string;
};
