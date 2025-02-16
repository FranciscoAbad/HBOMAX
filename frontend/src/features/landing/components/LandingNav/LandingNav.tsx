import React, { useState, useEffect } from "react";

import "./LandingNav.css";
import Hbomax from "../../../../assets/hbomax-med.svg";
import { useNavigate } from "react-router-dom";

export const LandingNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <div
      className="landing-nav-container"
      style={
        isScrolled
          ? { backgroundColor: "rgba(2, 2, 27, 0.4)" }
          : { backgroundColor: "rgba(2, 2, 27, 1)" }
      }
    >
      <div className="landing-nav-logo">
        <img src={Hbomax} className="landing-nav-logo-img" />
      </div>
      <div className="landing-nav-group">
        <div
          className="landing-nav-group-button"
          onClick={() => {
            navigate("/signin");
          }}
        >
          ACCOUNT
        </div>
        <div
          className="landing-nav-group-button landing-nav-group-button-stream"
          onClick={() => {
            navigate("/signup");
          }}
        >
          STREAM NOW
        </div>
      </div>
    </div>
  );
};
