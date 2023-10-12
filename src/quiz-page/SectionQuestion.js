import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function SectionQuestion({ quizData, selectedAnswer }) {
  const [answer, setAnswer] = useState("");
  const { questions, numCorrect, currentQuestion } = quizData;

  function handleAnswerChange(e) {
    setAnswer(e.target.value);
  }
  selectedAnswer(answer);

  return (
    <>
      <div className="text-white text-4xl w-full">{`${questions[currentQuestion].question}`}</div>
      <div className="text-white text-2xl">
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={answer}
          onChange={(e) => handleAnswerChange(e)}
        >
          {questions[currentQuestion].answersArr.map((answer, i) => (
            <FormControlLabel
              value={answer}
              id={i}
              key={i}
              control={<Radio />}
              label={answer}
            />
          ))}
        </RadioGroup>
      </div>
    </>
  );
}

export default SectionQuestion;
