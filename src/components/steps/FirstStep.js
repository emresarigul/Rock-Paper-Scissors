import React, { useState } from "react";
import "../../style/Steps.css";

const FirstStep = ({ setFirstStep, setSelected, imgArr }) => {
  return (
    <div>
      <div className="first-step-wrapper">
        <div className="rock-paper-scissors-wrapper">
          {imgArr.map((item) => {
            return (
              <div
                key={item.className}
                onClick={() => {
                  setSelected({
                    selectedImage: item.image,
                    selectedHand: item.className,
                  });
                  setFirstStep(false);
                }}
                className={item.className}
              >
                <img src={item.image} alt={item.className} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
