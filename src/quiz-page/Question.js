import { useReducer } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import SectionProgress from "./SectionProgress";
import Button from "@mui/material/Button";

const submitBtnStyles = {
  marginTop: "1rem",
  color: "#fff",
  padding: "1rem",
  fontSize: "1rem",
  borderRadius: "16px",
  backgroundColor: "#2196f3",
  ":hover": {
    bgcolor: "#fff",
    color: "#2196f3",
  },
};

///////////// REDUCER
const initialState = {
  numCorrect: 0,
  currentQuestion: 0,
  userAnswer: "",
  quizInfo: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "selectAnswer":
      return { ...state, userAnswer: action.payload };

    case "submitAnswer":
      if (!state.userAnswer || state.currentQuestion > 9) return { ...state };
      return {
        ...state,
        quizInfo: [...state.quizInfo, { ...state, ...action.payload }],
      };

    case "cleanup":
      if (!state.userAnswer || state.currentQuestion > 9) return { ...state };
      return {
        ...state,
        userAnswer: "",
        currentQuestion: state.currentQuestion + 1,
      };

    default:
      break;
  }
}

///////////// COMPONENT
function Question({ quizData }) {
  const [quiz, dispatch] = useReducer(reducer, initialState);
  const { category, difficulty, questions } = quizData;

  // console.log(quiz);

  return (
    <>
      <SectionProgress
        curQuestion={quiz.currentQuestion}
        category={category}
        difficulty={difficulty}
      />
      <div className="ml-52 mt-16 flex flex-col justify-center w-3/5">
        <span
          className="text-3xl mb-4"
          style={{ color: "#2196f3" }}
        >{`Question #${quiz.currentQuestion + 1}`}</span>
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
          {quiz.currentQuestion < 10 &&
            questions[quiz.currentQuestion].answersArr.map((answer, i) => (
              <FormControlLabel
                value={answer}
                id={i}
                key={i}
                control={<Radio size="medium" />}
                label={answer}
                sx={{
                  margin: "0.75rem",
                  color: "#fff",
                }}
              />
            ))}
        </RadioGroup>
      </div>
      <div className="flex justify-center">
        <Button
          onClick={() => {
            dispatch({
              type: "submitAnswer",
              payload: { category, difficulty, questions },
            });
            dispatch({ type: "cleanup" });
          }}
          variant="contained"
          sx={submitBtnStyles}
        >
          {quiz.currentQuestion === 9 ? "Finish Quiz" : "Submit"}
        </Button>
      </div>
    </>
  );
}

export default Question;
