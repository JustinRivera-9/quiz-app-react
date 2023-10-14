import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import SectionProgress from "./SectionProgress";
import Button from "@mui/material/Button";

function Question({ quizData }) {
  const { category, currentQuestion, difficulty, numCorrect, questions } =
    quizData;
  const [answer, setAnswer] = useState("");

  function handleSubmit() {
    console.log(answer);
  }

  return (
    <>
      <SectionProgress
        curQuestion={currentQuestion}
        category={category}
        difficulty={difficulty}
      />
      <div className="ml-52 mt-16 flex flex-col justify-center w-3/5">
        <div className="text-white text-3xl">
          {questions[currentQuestion].question}
        </div>
        <RadioGroup
          aria-labelledby="controlled-radio-buttons-group"
          name="Answers Group"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {questions[currentQuestion].answersArr.map((answer, i) => (
            <FormControlLabel
              value={answer}
              id={i}
              key={i}
              control={<Radio size="medium" />}
              label={answer}
              sx={{
                margin: "0.75rem",
                color: "#c026d3",
              }}
            />
          ))}
        </RadioGroup>
      </div>
      <div className="flex justify-center">
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            marginTop: "1rem",
            color: "#c026d3",
            padding: "1rem",
            fontSize: "1rem",
            borderRadius: "16px",
            backgroundColor: "#fff",
            ":hover": {
              bgcolor: "#C026D3",
              color: "#fff",
            },
          }}
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default Question;
