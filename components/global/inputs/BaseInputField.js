import React from "react";
import { TextField } from "@mui/material";

const BaseInputField = ({
  value,
  name,
  placeholder,
  type,
  onChange,
  width,
}) => {
  return (
    <div className="form-group">
      <TextField
        type={type}
        value={value}
        placeholder={placeholder}
        style={{ marginBottom: "1.5rem", width: width }}
        id="outlined-basic"
        color="secondary"
        label={placeholder}
        variant="outlined"
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default BaseInputField;
