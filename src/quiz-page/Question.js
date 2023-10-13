import SectionProgress from "./SectionProgress";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";

function Question({ quizData }) {
  const { questions, numCorrect, currentQuestion, category, difficulty } =
    quizData;

  const [answer, setAnswer] = useState("");

  function handleSubmit(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <SectionProgress
        curQuestion={currentQuestion}
        category={category}
        difficulty={difficulty}
      />
      <div className="ml-52 my-16 flex flex-col justify-center w-3/5">
        <div className="text-white text-4xl w-full">{`${questions[currentQuestion].question}`}</div>
        <div className="flex flex-col justify-center w-3/5 text-white text-2xl mt-8">
          <RadioGroup
            aria-labelledby="controlled-radio-buttons-group"
            name="Answers Group"
            value={answer}
            onChange={(e) => handleSubmit(e)}
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
                control={<Radio />}
                label={answer}
                sx={{}}
              />
            ))}
          </RadioGroup>
        </div>
      </div>
    </>
  );
}

export default Question;
