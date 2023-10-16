function Reuslts({ quizResults }) {
  console.log(quizResults);

  return (
    <div className="flex justify-center flex-col">
      <span className="text-3xl text-white">
        You got 4 out of 10 correct!{" "}
        <strong style={{ color: "#2196f3" }}>(40%)</strong>
      </span>
      <div className="text-3xl text-white">QUESTION SECTION</div>
    </div>
  );
}

export default Reuslts;
