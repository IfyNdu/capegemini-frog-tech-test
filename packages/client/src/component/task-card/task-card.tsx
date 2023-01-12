import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { TaskCardUI } from "../../types";

import styles from "./task-card.module.scss";


type Props = Partial<TaskCardUI> & Pick<TaskCardUI, | "title" | "description"> & {
  maxHeight?: number;
  onDelete: () => void;
  width?: number;
};

export const TaskCard: React.FC<Props> = ({
  description,
  image,
  imageHeight,
  maxHeight,
  onDelete,
  title,
  width = 320
}) => {

  return (
    <div className={styles.root}>
      <Card sx={{ maxHeight, maxWidth: width, width }}>
        {image && (
          <CardMedia
            alt={title}
            component="img"
            height={imageHeight}
            image={image}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant={"h5"} component={"p"}>
            {title}
          </Typography>
          <Typography variant={"body1"} color={"text.secondary"}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            color={"error"}
            onClick={onDelete}
            size={"small"}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
