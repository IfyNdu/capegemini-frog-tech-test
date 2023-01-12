import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import { fieldCofig } from "../../config";
import { FieldName } from "../../types";


type Props = {
  field: { [k in FieldName]: string };
  onChange: (name: FieldName) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onToggle: () => void;
  render: boolean;
}

export const AddCardForm: React.FC<Props> = ({
  field,
  onChange,
  onToggle,
  onSubmit,
  render,
}) => {

  return (
    <React.Fragment>
      <Dialog open={render} onClose={onToggle}>
        <DialogTitle>Add a card</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a card, please fill out the required form fields.
          </DialogContentText>
          {fieldCofig.map(({ label, multiline, name, required, rows, type }) => {
            return (
              <TextField
                autoFocus
                fullWidth
                key={name}
                id={name}
                label={label}
                margin={"dense"}
                multiline={multiline}
                onChange={onChange(name)}
                required={required}
                rows={rows}
                type={type}
                value={field[name]}
                variant={"outlined"}
          
              />
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={onToggle} color={"error"}>Cancel</Button>
          <Button onClick={onSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
