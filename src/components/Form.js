import React from "react";
import {
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  FormLabel,
} from "@mui/material";
import DifficultyRadio from "./inputs/DifficultyRadio";
import TransferList from "./inputs/TransferList";

import "../App.css";
import APIService from "../api/APIService";

const Form = (props) => {
  const [selected, setSelected] = React.useState([]);
  const [difficulty, setDifficulty] = React.useState([false, false, false]);
  const [counter, setCounter] = React.useState(0);
  const questionsHandler = props.questionsHandler;

  const handleSubmit = (event) => {
    event.preventDefault();
    setCounter(counter + 1);
    APIService.submitForm({
      difficulty: getDifficultyRequest(),
      company: selected
    }).then(response => {
        questionsHandler(response.questions);
    });
  };

  const handleOnChange = (selectedDifficulty) => {
    const updatedDifficulty = difficulty.slice();
    updatedDifficulty[selectedDifficulty] =
      !updatedDifficulty[selectedDifficulty];
    setDifficulty(updatedDifficulty);
  };

  const getDifficultyRequest = () => {
    const req = [];
    difficulty.forEach((element, index) => {
      if (element) {
        switch (index) {
          case 0:
            req.push("Easy");
            break;
          case 1:
            req.push("Medium");
            break;
          case 2:
            req.push("Hard");
            break;
          default:
          // do nothing
        }
      }
    });
    return req;
  };

  return (
    <Card className="card" raised={true}>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <DifficultyRadio
              difficulty={difficulty}
              difficultyHandler={handleOnChange}
            />
            <Divider sx={{ m: 2 }} />
            <TransferList selected={selected} selectedHandler={setSelected} />
            <Divider sx={{ m: 2 }} />
            <FormLabel>Number of questions: 2</FormLabel>
            <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
              Generate
            </Button>
            <FormLabel>You have pressed 'Generate' {counter} times</FormLabel>
          </FormControl>
        </form>
      </CardContent>
    </Card>
  );
};

export default Form;
