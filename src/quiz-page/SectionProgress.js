import { formatString } from "../hooks/utilityFunctions.js";

function SectionProgress({ curQuestion, category, difficulty }) {
  return (
    <>
      <div className="flex mx-auto justify-between md:justify-around w-3/4">
        <div className="text-lg text-gray-200 w-1/4 lg:w-auto">{category}</div>
        <div className="text-2xl font-bold" style={{ color: "#2196f3" }}>
          {(curQuestion / 10) * 100}%
        </div>
        <div className="text-lg text-gray-200">{formatString(difficulty)}</div>
      </div>
      <div className="mx-auto my-4 w-3/4 h-8 border-2 border-white">
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
