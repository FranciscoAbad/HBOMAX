import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/Store";
import {
  useLocalStorage,
  useLocalStorageProfile,
} from "../hooks/useLocalStorage";
import { getUserByToken, setToken } from "../redux/Slices/UserSlice";
import { useNavigate } from "react-router-dom";
import { selectProfile } from "../redux/Slices/ProfileSlice";
import { FeedNavBar } from "../features/feed/components/FeedNavBar/FeedNavBar";
import { FeedNav } from "../features/feed/components/FeedNav/FeedNav";
import "./Feed.css";
import { FeedTitleSlider } from "../features/feed/components/FeedTitleSlider/FeedTitleSlider";
import { FeedHeaderSlider } from "../features/feed/components/FeedHeaderSlider/FeedHeaderSlider";
import { FeedFooter } from "../features/feed/components/FeedFooter/FeedFooter";
import { FeedTitlesGrid } from "../features/feed/components/FeedGridTitles/FeedTitlesGrid";

export const Feed: React.FC = () => {
  const state = useSelector((state: RootState) => state.user);
  const stateProfile = useSelector((state: RootState) => state.profile);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [jwt, setJwt, removeJwt] = useLocalStorage("token", "");

  useEffect(() => {
    if (state.token === "") {
      console.log(state);
      navigate("/");
    } else if (stateProfile.selectedProfile === null) {
      navigate("/profile/select");
    }
  }, [state.token, jwt]);

  return (
    <div className="feed">
      <FeedNav />
      <FeedHeaderSlider fetchUrl="title/all/title/trending" />
      <FeedTitleSlider
        fetchUrl="title/all/title/trending"
        title="Action"
        subTitle="Our HBO horror specials"
        banner={false}
        big={false}
        backgroundFade="background-image: linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0.992) 6.67%, rgba(0, 0, 0, 0.965) 13.33%, rgba(0, 0, 0, 0.918) 20%, rgba(0, 0, 0, 0.85) 26.67%, rgba(0, 0, 0, 0.77) 33.33%, rgba(0, 0, 0, 0.667) 40%, rgba(0, 0, 0, 0.557) 46.67%, rgba(0, 0, 0, 0.443) 53.33%, rgba(0, 0, 0, 0.333) 60%, rgba(0, 0, 0, 0.23) 66.67%, rgba(0, 0, 0, 0.15) 73.33%, rgba(0, 0, 0, 0.082) 80%, rgba(0, 0, 0, 0.035) 86.67%, rgba(0, 0, 0, 0.008) 93.33%, rgba(0, 0, 0, 0) 100%);"
        info={false}
      />
      <FeedTitleSlider
        fetchUrl="title/title/type/movie/alphabetic"
        title="Horror & Suspense"
        subTitle=""
        banner={true}
        big={false}
        info={true}
      />
      <FeedTitleSlider
        fetchUrl="title/all/title/trending"
        title=""
        subTitle=""
        banner={false}
        big={false}
        sideSlide={{
          title: "Trending Now",
          subTitle:
            "The most-watched movies and series in argentina in te past few days. Don't miss out!",
          buttonLabel: "BROWSE MORE",
          imageUrl:
            "https://art-gallery-latam.api.hbo.com/images/htZbraXlSYDborzH5C2GS$$$8d97f627b6165ecc50dbd43b5007d4f4$$$latam/background?v=034774df1e526034622be9393547ad91&format=png&size=3840x1152&compression=low&protection=false&scaleDownToFit=false&language=en-us",
        }}
        info={false}
      />
      <FeedFooter />
    </div>
  );
};
