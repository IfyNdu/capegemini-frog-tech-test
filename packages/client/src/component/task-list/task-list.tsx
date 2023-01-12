import Add from '@mui/icons-material/Add';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";

import styles from "./task-list.module.scss";


type Props = {
  children?: React.ReactNode;
  onToggleForm: () => void;
  name: string;
};

export const TaskList: React.FC<Props> = ({
  children,
  onToggleForm,
  name,
}) => {

  return (
    <div className={styles.root}>
      <Typography
        component={"span"}
        gutterBottom
        variant={"h5"}
      >
        {name}
      </Typography>
      <div className={styles.cards}>
        {children}
      </div>
      <div className={styles.addCard}>
        <Button
          color={"success"}
          onClick={onToggleForm}
          startIcon={<Add />}
        >
          Add a card
        </Button>
      </div>
    </div>
  );
};
