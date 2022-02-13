import React from "react";
import { Card, CardContent } from "@mui/material";

import "../App.css";

const Instruction = () => {
  return (
    <Card className="card" raised={true}>
      <CardContent>
        <h2>Coding Trainer (Version 2) </h2>
        <h6>
          The Coding Trainer intends to simulate a technical assessment
          environment that majority of tech companies incorporate in their
          interview process.
          <br />
          Remember when you were younger and you had to complete as many
          Practice Papers as you can before your exam, and those Practice Papers
          are formatted to mimic that of an actual exam paper? It is the same
          with Coding Trainer - except it is for code :D
          <p />
          Here is a quick refresher of how a technical assessment (by top-tier
          companies) is like:
          <br />
          1) Interviewee will be exposed to 2 coding questions
          <br />
          2) The coding questions are of different difficulty levels
          <br />
          3) The duration is usually 45-60 minutes Similar to a technical
          assessment, the Coding Trainer provides you 2 coding questions for
          your practise.
          <p />
          We currently have a test-bank of 18 questions; these are real
          questions asked by interviewers from Meta, Amazon and Google!
        </h6>
      </CardContent>
    </Card>
  );
};

export default Instruction;
