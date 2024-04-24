import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Hbomax from "../../../../assets/hbomax-med.svg";

import "./FeedNavBar.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/Store";
import { useNavigate } from "react-router-dom";
import {
  firstLetterToUpperCase,
  firstLettesToUpperCaseAndReplace,
} from "../../../title/utils/TitleUtils";

interface FeedNavBarProps {
  toggleSideBar: () => void;
  title?: string;
}

export const FeedNavBar: React.FC<FeedNavBarProps> = ({
  toggleSideBar,
  title,
}) => {
  const state = useSelector((state: RootState) => state);
  const [dropMenu, toggleDropMenu] = useState<boolean>(false);
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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

  const switchProfile = () => {
    navigate("/profile/select");
  };

  const displayDropMenu = () => {
    toggleDropMenu(!dropMenu);
  };
  return (
    <div
      className="feed-nav-bar"
      style={
        isScrolled
          ? { backgroundColor: "rgba(15, 15, 15, 0.98)" }
          : { backgroundColor: "rgba(255,255,255,0)" }
      }
    >
      <div className="feed-nav-bar-flex">
        <div className="feed-nav-bar-flex-left">
          <div
            onClick={toggleSideBar}
            className="feed-nav-bar-flex-left-display"
          >
            <MenuIcon
              sx={{
                width: 24,
              }}
            />
          </div>
          <div
            className="feed-nav-bar-flex-left-button"
            onClick={() => navigate("/movies")}
          >
            Movies
          </div>
          <div
            className="feed-nav-bar-flex-left-button"
            onClick={() => navigate("/tv-shows")}
          >
            Series
          </div>
        </div>
        <div
          className="feed-nav-bar-flex-mid"
          onClick={() => navigate("/home")}
        >
          <img src={Hbomax} alt="" />
          {title && !isScrolled ? (
            <h4>{firstLettesToUpperCaseAndReplace(title)}</h4>
          ) : (
            <></>
          )}
        </div>
        <div className="feed-nav-bar-flex-right">
          <div className="feed-nav-bar-flex-right-button">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAV1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////+ORg7oAAAAHHRSTlMAIO/fn79AcBCAr89vfwFgMF+gsFCQTwD+7r6eKS+K8wAAAadJREFUeF7tlutqwzAMRmU5dnzLkt521fs/55gpM10zSS6hsNHzV+H4ixQiw3/iQfCnZC0RYU7Rh1stxSFdkHa3aCaka+xkoI+CtI7tSmUy/Y7Vh9ohcaA21NQEOJTFAIDxJTU7TZ0e5y8KR9dlmpqG6Z1sKmcNjrDGSGekPhkURmMsVVCYnW0eweSAozSPaBqFZ+TYC1YRBnFiIzSYjkepQxkknBBppooBCU+VZ/6gA8g4dnChnaOLhIGrWtCA1eRhldjeTGTPjTe1osjIHZpbXJGF+1CwDV/EcP2kCuigyl8R2e4eISdaQINnprbdd3SqxQEk2qGRi4ugwXIfb8BWFThSJQh/GZnEPzmTMpIRlmRAZaQs/bmibosUcYsE1Ow1g/IWHbs2LUdW7357p9sIzPz9qCCRcrSRzuTrUN7RN4PeROm4ruk3kU3F11vtUgakhtI0InGgU5uMZTzOwF5tgnFF1abZTE9yqLimwhgAlKbG7H72Zq6afhMEH1NGIrI2nXy1iKZ+hj7Tw/SylSnCRqYDbGQaYAPTK9GbgQ2Y3z8WuDcPPgGiPGHwl+gL/wAAAABJRU5ErkJggg=="
              alt=""
            />
          </div>
          <div
            onClick={displayDropMenu}
            className="feed-nav-bar-flex-right-profile"
          >
            <div className="feed-nav-bar-flex-right-profile-picture">
              <div className="feed-nav-bar-flex-right-profile-picture-background"></div>
              {state.profile.selectedProfile &&
              state.profile.selectedProfile.profilePicture ? (
                <img
                  className="feed-nav-bar-flex-right-profile-picture-image"
                  src={state.profile.selectedProfile.profilePicture.imageURL}
                  alt=""
                />
              ) : (
                <div className="feed-nav-bar-flex-right-profile-picture-letter">
                  {state.profile.selectedProfile?.name
                    .substring(0, 1)
                    .toUpperCase()}
                </div>
              )}
            </div>
            <div className="feed-nav-bar-flex-right-profile-name">
              {state.profile.selectedProfile &&
                state.profile.selectedProfile.name}
            </div>
          </div>
        </div>
      </div>
      {dropMenu ? (
        <div className="feed-nav-bar-drop-menu">
          <div className="feed-nav-bar-drop-menu-button">My stuff</div>
          <div
            onClick={switchProfile}
            className="feed-nav-bar-drop-menu-button"
          >
            Switch profiles
          </div>
          <div
            className="feed-nav-bar-drop-menu-button"
            onClick={() => {
              navigate("/account");
            }}
          >
            Settings
          </div>
          <div className="feed-nav-bar-drop-menu-line"></div>
          <div
            className="feed-nav-bar-drop-menu-button"
            onClick={() => {
              localStorage.clear();
            }}
          >
            Sign Out
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
