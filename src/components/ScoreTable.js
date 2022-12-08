import React from "react";
import "../style/ScoreTable.css";
import logo from "../assets/images/logo.svg";

const ScoreTable = ({ score }) => {
  return (
    <div className="main-wrapper">
      <div className="table-wrapper">
        <div className="game-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="score-table">
          <div>Score</div>
          <div className="score">{score}</div>
        </div>
      </div>
    </div>
  );
};

export default ScoreTable;
