import React, { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";

const Steps = ({ setScore, score }) => {
  const [selected, setSelected] = useState({
    selectedImage: null,
    selectedHand: "",
  });

  const imgArr = [
    {
      image: paper,
      className: "paper",
    },
    {
      image: scissors,
      className: "scissors",
    },
    {
      image: rock,
      className: "rock",
    },
  ];

  const [firstStep, setFirstStep] = useState(true);

  if (firstStep) {
    return (
      <div>
        <FirstStep
          setSelected={setSelected}
          setFirstStep={setFirstStep}
          imgArr={imgArr}
        />
      </div>
    );
  }

  return (
    <SecondStep
      selected={selected}
      imgArr={imgArr}
      setFirstStep={setFirstStep}
      setScore={setScore}
      score={score}
    />
  );
};

export default Steps;
