import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextInput({
  onhandleChange,
  name,
  defaultValue,
  title,
  required,
  error,
  errorMsg,
  width,
}) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: width ? width : "50ch",
          color: "red",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error={error}
          required={required}
          id="outlined-error-helper-text"
          name={name}
          label={title}
          defaultValue={defaultValue}
          helperText={
            error ? (defaultValue ? errorMsg : "This filed is required") : ""
          }
          onChange={onhandleChange}
        />
      </div>
    </Box>
  );
}
