import React, { useState } from "react";
import "../style/Content.css";
import ScoreTable from "./ScoreTable";
import Steps from "./steps/Steps";

const Content = () => {
  const [score, setScore] = useState(0);

  return (
    <>
      <ScoreTable score={score} />
      <div className="game-container">
        <Steps setScore={setScore} score={score} />
      </div>
    </>
  );
};

export default Content;
