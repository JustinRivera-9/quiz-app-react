import { useReducer } from "react";
import Reuslts from "./Reuslts";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import SectionProgress from "./SectionProgress";
import Button from "@mui/material/Button";
import { formatString, useTitle } from "../hooks/utilityFunctions";

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
  currentQuestion: 0,
  userAnswer: "",
  questionInfo: [],
  category: "",
  difficulty: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "setProps":
      const { difficulty, category } = action.payload;
      return {
        ...state,
        difficulty: formatString(difficulty),
        category,
      };

    case "selectAnswer":
      return { ...state, userAnswer: action.payload };

    case "submitAnswer":
      if (!state.userAnswer || state.currentQuestion >= 10) return { ...state };
      const userAnswer = state.userAnswer;

      return {
        ...state,
        questionInfo: [
          ...state.questionInfo,
          { ...action.payload, userAnswer },
        ],
      };

    case "cleanup":
      if (!state.userAnswer || state.currentQuestion >= 10) return { ...state };
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
  if (!quiz.category)
    dispatch({
      type: "setProps",
      payload: { category, difficulty, questions },
    });

  useTitle(`Ultimate Quiz | Question #${quiz.currentQuestion + 1}`);

  const quizInfo = { category, difficulty };
  const isQuizFinished = quiz.currentQuestion > 9;

  return !isQuizFinished ? (
    <>
      <SectionProgress
        curQuestion={quiz.currentQuestion}
        category={category}
        difficulty={difficulty}
      />
      <div className="mt-8 flex flex-col mx-auto w-9/12">
        <span
          className="text-3xl mb-4"
          style={{ color: "#2196f3" }}
        >{`Question #${quiz.currentQuestion + 1}`}</span>
        <div className="text-white text-3xl my-4">
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
                  margin: ".75rem 0.25rem",
                  color: "#fff",
                }}
              />
            ))}
        </RadioGroup>
      </div>
      <div className="flex justify-center pb-12">
        <Button
          onClick={() => {
            dispatch({
              type: "submitAnswer",
              payload: questions[quiz.currentQuestion],
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
  ) : (
    <Reuslts quizResults={quiz.questionInfo} quizInfo={quizInfo} />
  );
}
export default Question;
