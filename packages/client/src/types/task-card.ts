export type TaskCardUI = {
  createdAt: string;
  description: string;
  dueDate?: string;
  image?: string;
  imageHeight: string | number;
  title: string;
  uid: string;
};

export type TaskCard = {
  _id: string;
  createdAt: string;
  description: string;
  dueDate?: string;
  image?: string;
  title: string;
};
