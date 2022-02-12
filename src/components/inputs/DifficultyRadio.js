import React from "react";
import { Checkbox, FormControlLabel, FormLabel } from "@mui/material";

const DifficultyRadio = (props) => {
  const difficulty = props.difficulty;
  const handleOnChange = props.difficultyHandler;

  return (
    <div>
      <FormLabel id="difficulty-label">Select Difficulty Level</FormLabel>
      <br/>
      <FormControlLabel
        control={<Checkbox />}
        label="Easy"
        checked={difficulty[0]}
        onChange={() => handleOnChange(0)}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Medium"
        checked={difficulty[1]}
        onChange={() => handleOnChange(1)}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Hard"
        checked={difficulty[2]}
        onChange={() => handleOnChange(2)}
      />
    </div>
  );
};

export default DifficultyRadio;
