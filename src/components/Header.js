import { GitHub } from "@mui/icons-material";

function Header({ setPage }) {
  return (
    <div className="flex justify-between align-center py-4 px-6 mb-4">
      <button
        className="pl-1 text-gray-200 text-3xl"
        onClick={() => setPage("landing")}
      >
        THE ULTIMATE QUIZ
      </button>
      {/* <button
        className="p-1 text-3xl text-gray-200 hover:text-fuchsia-600"
        onClick={() => setPage("quiz")}
      > 
        Take Quiz
      </button> */}
      {/* <button className="pr-1 text-2xl" onClick={() => setPage('rankings')}>View Rankings</button> */}
      <a
        style={{ float: "right" }}
        href="https://github.com/JustinRivera-9/quiz-app-react"
        target="_blank"
        rel="noreferrer"
      >
        <GitHub sx={{ color: "white" }} fontSize="large" />
      </a>
    </div>
  );
}

export default Header;
