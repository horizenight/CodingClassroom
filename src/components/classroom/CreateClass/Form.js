import { Button, DialogActions, TextField } from "@material-ui/core";
import React from "react";

const Form = () => {
  return (
    <div className="form">
      <p className="class__title">Create Class</p>

      <div classname="form__inputs">
        <TextField
          id="filled-basic"
          label="Class Name {required}"
          className="form__input"
          variant="filled"
        />
        <TextField
          id="filled-basic"
          label="Section"
          className="form__input"
          variant="filled"
        />
        <TextField
          id="filled-basic"
          label="Subject"
          className="form__input"
          variant="filled"
        />
        <TextField
          id="filled-basic"
          label="Room"
          className="form__input"
          variant="filled"
        />
      </div>
      <DialogActions>
          <Button color='primary' >Created</Button>
      </DialogActions>
    </div>
  );
};

export default Form;
