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
import { AppDispatch } from "../redux/Store";
import { useDispatch } from "react-redux";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const Landing: React.FC = () => {
  const [jwt, setJwt, removeJwt] = useLocalStorage("token", "");
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (jwt !== "") navigate("/home");
  }, []);

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
