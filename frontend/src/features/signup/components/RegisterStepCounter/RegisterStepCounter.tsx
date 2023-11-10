import React from "react";

import { displayIcon, iconClass } from "../../utils/RegisterStepUtil";
import "./RegisterStepCounter.css";

interface RegisterStepProps {
  step: number;
  changeStep(): void;
}

export const RegisterStepCounter: React.FC<RegisterStepProps> = ({
  step,
  changeStep,
}) => {
  return (
    <div className="reg-step-counter-container">
      <span className="reg-step-number">PASO {step} DE 3</span>
    </div>
  );
};
