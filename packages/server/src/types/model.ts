export type Card = {
  _id: string;
  createdAt: Date;
  description: string;
  dueDate?: Date;
  image?: string;
  title: string
};

export type List = {
  _id: string;
  cards: Card[];
  createdAt: Date
  name: string;
};

export type Board = {
  _id: string;
  createdAt: Date;
  list: List[];
  name: string;
};
