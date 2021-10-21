import React from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/lab";
import { TextField } from "@mui/material";
import DateAdapter from "@mui/lab/AdapterMoment";

const BaseDatePicker = ({ name, value, onChange, width }) => {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <DateTimePicker
        name={name}
        label="A que hora naci ?"
        value={value}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            style={{ marginBottom: "1.5rem", width: width }}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default BaseDatePicker;
