import React, { useEffect, useState } from "react";

const SecondStep = ({ selected, imgArr, setFirstStep, setScore, score }) => {
  const [opponentHand, setopponentHand] = useState({
    opponendHandImage: null,
    opponentHandClassName: "",
  });

  const [result, setResult] = useState({
    playAgain: "PLAY AGAIN",
    winOrLose: null,
  });

  const [randomPicker, setRandomPicker] = useState(
    Math.floor(Math.random() * 3)
  );

  const firstStepHandler = () => {
    setFirstStep(true);
  };

  const opponentHandHandler = () => {
    setopponentHand({
      opponendHandImage: imgArr[randomPicker].image,
      opponentHandClassName: imgArr[randomPicker].className,
    });
  };

  const resultHandler = () => {
    if (
      (selected.selectedHand === "rock" &&
        opponentHand.opponentHandClassName === "paper") ||
      (selected.selectedHand === "paper" &&
        opponentHand.opponentHandClassName === "scissors") ||
      (selected.selectedHand === "scissors" &&
        opponentHand.opponentHandClassName === "rock")
    ) {
      if (score > 0) {
        setScore((prevScore) => prevScore - 1);
      }
      setResult({
        winOrLose: "YOU LOSE",
      });
    } else if (
      (selected.selectedHand === "rock" &&
        opponentHand.opponentHandClassName === "scissors") ||
      (selected.selectedHand === "paper" &&
        opponentHand.opponentHandClassName === "rock") ||
      (selected.selectedHand === "scissors" &&
        opponentHand.opponentHandClassName === "paper")
    ) {
      setScore((prevScore) => prevScore + 1);
      setResult({
        winOrLose: "YOU WIN",
      });
    } else if (
      (selected.selectedHand === "rock" &&
        opponentHand.opponentHandClassName === "rock") ||
      (selected.selectedHand === "paper" &&
        opponentHand.opponentHandClassName === "paper") ||
      (selected.selectedHand === "scissors" &&
        opponentHand.opponentHandClassName === "scissors")
    ) {
      setResult({
        winOrLose: "DRAW",
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      opponentHandHandler();
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      resultHandler();
    }, 100);
  }, [opponentHand]);

  return (
    <div className="flex-container">
      <div className="your-hand">
        <div className="heading">YOU PICKED</div>
        <div className="your-selected-hand">
          <div className={selected.selectedHand}>
            <img src={selected.selectedImage} alt={selected.selectedHand} />
          </div>
        </div>
      </div>
      <div
        className={`resut-play-again ${
          result.winOrLose !== null ? "show" : "do-not-show"
        }`}
      >
        <div>{result.winOrLose}</div>
        <button onClick={firstStepHandler} className="btn">
          PLAY AGAIN
        </button>
      </div>
      <div className="opponent-hand">
        <div
          className={`heading ${
            opponentHand.opponendHandImage !== null ? "" : "heading-relative"
          }`}
        >
          THE HOUSE PICKED
        </div>
        <div className="dark-circle"></div>
        <div className="opponent-selected-hand">
          <div className={opponentHand.opponentHandClassName}>
            <img
              src={opponentHand.opponendHandImage}
              alt={opponentHand.opponentHandClassName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
