import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText } from "@mui/material";

export default function SelectField({
  option,
  name,
  selectHandleChange,
  error,
  required,
  title,
}) {
  const [data, setData] = React.useState("");

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <Box component="form" autoComplete="off">
      <FormControl sx={{ m: 1, minWidth: 436 }}>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data}
          name={name}
          label="Age"
          onChange={(e) => {
            handleChange(e);
            selectHandleChange(e);
          }}
          helperText={error ? "This filed is required" : ""}
          error={error}
          required={required}
        >
          {option &&
            option.map((item, idx) => (
              <MenuItem value={item.value}>{item.name}</MenuItem>
            ))}
        </Select>
        {error ? (
          <FormHelperText>
            <span className="mandatory-error">This filed is required</span>
          </FormHelperText>
        ) : null}
      </FormControl>
    </Box>
  );
}
