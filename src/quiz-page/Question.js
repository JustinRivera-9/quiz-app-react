import { useReducer } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import SectionProgress from "./SectionProgress";
import Button from "@mui/material/Button";

const initialState = { numCorrect: 0, currentQuestion: 0, userAnswer: "" };

function reducer(state, action) {
  switch (action.type) {
    case "selectAnswer":
      return { ...state, userAnswer: action.payload };

    case "submitAnswer":
      if (!state.userAnswer) return { ...state };
      return { ...state, currentQuestion: state.currentQuestion + 1 };

    default:
      break;
  }
}

function Question({ quizData }) {
  const [quiz, dispatch] = useReducer(reducer, initialState);
  const { category, difficulty, questions } = quizData;

  console.log(quiz);

  return (
    <>
      <SectionProgress
        curQuestion={quiz.currentQuestion}
        category={category}
        difficulty={difficulty}
      />
      <div className="ml-52 mt-16 flex flex-col justify-center w-3/5">
        <div className="text-white text-3xl">
          {questions[quiz.currentQuestion].question}
        </div>
        <RadioGroup
          aria-labelledby="controlled-radio-buttons-group"
          name="Answers Group"
          value={quiz.userAnswer}
          onChange={(e) =>
            dispatch({ type: "selectAnswer", payload: e.target.value })
          }
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {questions[quiz.currentQuestion].answersArr.map((answer, i) => (
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
          onClick={() => dispatch({ type: "submitAnswer" })}
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
