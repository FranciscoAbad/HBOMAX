import React from "react";

import { LandingNav } from "../features/landing/components/LandingNav/LandingNav";
import { LandingBanner } from "../features/landing/components/LandingBanner/LandingBanner";
import { LandingPlanPicker } from "../features/landing/components/LandingPlanPicker/LandingPlanPicker";

export const Landing: React.FC = () => {
  return (
    <>
      <LandingNav />
      <LandingBanner />
      <LandingPlanPicker />
    </>
  );
};
