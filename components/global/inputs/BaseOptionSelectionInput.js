import React from "react";
import { MenuItem, TextField } from "@mui/material";

const BaseOptionselectionField = ({
  id,
  value,
  values,
  type,
  name,
  placeholder,
  width,
  onChange,
}) => {
  return (
    <div>
      {values?.length ? (
        <TextField
          id={id}
          value={value}
          select
          type={type}
          name={name}
          placeholder={placeholder}
          style={{ marginBottom: "1.5rem", width: width }}
          color="secondary"
          variant="outlined"
          onChange={onChange}
        >
          {values?.map((option, index) => (
            <MenuItem key={value + index} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      ) : (
        "loading ..."
      )}
    </div>
  );
};

export default BaseOptionselectionField;
