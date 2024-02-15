import React, { useEffect } from "react";

import "swiper/css";

import { LandingNav } from "../features/landing/components/LandingNav/LandingNav";
import { LandingBanner } from "../features/landing/components/LandingBanner/LandingBanner";
import { LandingPlanPicker } from "../features/landing/components/LandingPlanPicker/LandingPlanPicker";
import { LandingReleases } from "../features/landing/components/LandingReleases/LandingReleases";
import { LandingShowRoom } from "../features/landing/components/LandingShowRoom/LandingShowRoom";
import { LandingFeatures } from "../features/landing/components/LandingFeatures/LandingFeatures";
import { LandingBrands } from "../features/landing/components/LandingBrands/LandingBrands";
import { LandingFaqs } from "../features/landing/components/LandingFaqs/LandingFaqs";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const Landing: React.FC = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <LandingNav />
      <LandingBanner />
      <LandingPlanPicker />
      <LandingReleases />
      <LandingFeatures />
      <LandingBrands />
      <LandingFaqs />
    </>
  );
};
