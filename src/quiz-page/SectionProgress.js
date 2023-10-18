import { formatString } from "../hooks/utilityFunctions.js";

function SectionProgress({ curQuestion, category, difficulty }) {
  return (
    <>
      <div className="flex justify-around">
        <div className="text-xl text-gray-200">{formatString(difficulty)}</div>
        <div className="text-2xl font-bold" style={{ color: "#2196f3" }}>
          {(curQuestion / 10) * 100}%
        </div>
        <div className="text-xl text-gray-200">{category}</div>
      </div>
      <div className="ml-56 my-4 w-3/4 h-8 border-2 border-white">
        <div
          style={{
            height: "100%",
            width: `${(curQuestion / 10) * 100}%`,
            backgroundColor: "#2196f3",
          }}
        ></div>
      </div>
    </>
  );
}

export default SectionProgress;
