import { useReducer, useEffect } from "react";
import { useFetchData } from "../hooks/useFetchData.js";
import LoadingData from "./LoadingData.js";
import Question from "./Question.js";

//check if initial state for reducer can be inside a component or if it should be a global variable
const initialState = {
  category: "",
  difficulty: "",
  questions: { question: "", answersArr: [], correctAnswer: [] },
  numCorrect: 0,
  currentQuestion: 0,
  isLoading: true,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataFetched":
      if (!action.payload.results || action.payload.results.length === 0) {
        return state;
      }

      return {
        ...state,
        category: action.payload.results[0].category,
        difficulty: action.payload.results[0].difficulty,
        questions: action.payload.results.map((el) => {
          return {
            question: el.question,
            answersArr: [el.correct_answer, ...el.incorrect_answers],
            correctAnswer: el.correct_answer,
          };
        }),
        isLoading: false,
      };

    case "submitAnswer":
      // console.log(action.payload, state);
      if (action.payload === state.questions[0].correctAnswer) {
        return console.log("TEST");
      }
      break;

    default:
      return state;
  }
}

function Quiz({ quizParam }) {
  const { data, isLoading } = useFetchData(
    `https://opentdb.com/api.php?amount=10&category=${quizParam.category}&difficulty=${quizParam.difficulty}&type=multiple`
  );
  const [quizData, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!isLoading && data) dispatch({ type: "dataFetched", payload: data });
  }, [isLoading, data]);

  function handleAnswer(answer) {
    if (answer) dispatch({ type: "submitAnswer", payload: answer });
    else console.log(answer);
  }

  return (
    <>
      {!quizData.isLoading && quizData ? (
        <Question quizData={quizData} updateAnswer={handleAnswer} />
      ) : (
        <LoadingData />
      )}
    </>
  );
}

export default Quiz;
