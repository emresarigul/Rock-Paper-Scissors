import React, { useState } from "react";
import "../src/style/App.css";
import Content from "./components/Content";
import rules from "./assets/images/image-rules.svg";
import closeBtn from "./assets/images/icon-close.svg";

function App() {
  const [showRules, setShowRules] = useState(false);

  const rulesHandler = () => {
    setShowRules(!showRules);
    if (!showRules) {
      document.body.className = "overflow-hidden";
    } else {
      document.body.className = "";
    }
  };
  return (
    <>
      <div
        className={`overlay ${showRules ? "display-block" : "display-none "}`}
      ></div>
      <div className="container">
        <Content />
        <div onClick={rulesHandler} className="game-info-button">
          RULES
        </div>
        <div
          className={`game-info ${
            showRules ? "show-rules" : "do-not-show-rules"
          }`}
        >
          <h3>RULES</h3>
          <div onClick={rulesHandler} className="close-button">
            <img src={closeBtn} alt="" />
          </div>
          <img className="rule-image" src={rules} alt="rules" />
        </div>
      </div>
    </>
  );
}

export default App;
