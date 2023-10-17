import LandingPage from "./components/LandingPage";
import Header from "./components/Header.js";
import Quiz from "./quiz-page/Quiz";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("landing");
  const [quizSetup, setQuizSetup] = useState(null);

  return (
    <div className="m-0 p-0 min-h-full bg-gray-900">
      <Header setPage={setPage} />
      {page === "landing" && (
        <LandingPage quizSetup={setQuizSetup} setPage={setPage} />
      )}
      {page === "quiz" && <Quiz quizParam={quizSetup} />}
    </div>
  );
}

export default App;
