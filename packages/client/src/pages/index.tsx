import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useQuery } from "react-query";
import { TaskCard, TaskList } from "../component";
import * as Api from "../services";
import { AddCardForm } from "../view";
import { FieldName } from "../types";

import styles from "../../styles/home.module.scss";


const initialFields = {
  description: "",
  image: "",
  title: ""
};

export default function Home() {

  const [open, setOpen] = useState(false);
  const [activeListId, setActiveListId] = useState("");
  const [listName, setListName] = useState("");
  const [field, setField] = useState<{ [k in FieldName]: string }>(initialFields);

  const handleToggleForm = (uid: string) => () => {
    setActiveListId(uid);
    setOpen(true);
  };

  const handleCloseForm = () => {
    setOpen(false);
    setActiveListId("");
  };

  const handleListNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setListName(value);
  };

  const handleChange = (fieldId: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setField(stateFields => ({
      ...stateFields,
      [fieldId]: value
    }));
  }

  const handleSubmit = async () => {

    const isValid = Object
      .entries(field)
      .every(([name, val]) => name === "image" ? true : val)

    if (isValid) {
      await Api.list.addCard(activeListId, field);

      handleCloseForm();
      setField(initialFields);
      refetch();
    }
  }

  const handleListNameSubmit = async () => {

    if (data?.boardId && listName) {
      await Api.board.addList(data.boardId, { name: listName });

      setListName("")
      refetch();
    }
  }

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["board"],
    queryFn: async () => {
      return await Api.board.getBoard();
    },
    refetchOnWindowFocus: false,
  });

  const handleDelete = (id: string, listId: string) => async () => {
    await Api.list.deleteCard(id, listId);
    refetch();
  }

  if (isLoading) {
    return "loading..."
  };

  return (
    <main className={styles.root}>
      {data?.list.map(list => {
        return (
          <div key={list.uid} className={styles.taskList}>
            <TaskList
              name={list.name}
              onToggleForm={handleToggleForm(list.uid)}>
              {list.cards.map(({ description, image, imageHeight, title, uid }) => {
                return (
                  <TaskCard
                    key={uid}
                    description={description}
                    image={image}
                    imageHeight={imageHeight}
                    onDelete={handleDelete(uid, list.uid)}
                    title={title}
                  />
                )
              })}
            </TaskList>
          </div>
        )
      })}
      <div className={styles.addNewList}>
        <div className={styles.mask} />
        <TextField
          className={styles.addTextField}
          autoFocus
          margin={"dense"}
          onChange={handleListNameChange}
          id={"add-list"}
          label={"Add a list"}
          type={"text"}
          fullWidth
          placeholder={"Enter list title..."}
          variant={"filled"}
          value={listName}
        />
        {listName && (
          <Button
            color={"success"}
            className={styles.addButton}
            onClick={handleListNameSubmit}
            size={"large"}
            variant={"contained"}>
            Add List
          </Button>
        )}
      </div>
      <AddCardForm
        field={field}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onToggle={handleCloseForm}
        render={open}
      />
    </main>
  );
};
