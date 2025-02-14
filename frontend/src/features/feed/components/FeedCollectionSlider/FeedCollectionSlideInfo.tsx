import React from "react";
import { Image } from "../../../../utils/GlobalInterfaces";
import "./FeedCollectionTitleSlider.css";
interface FeedCollectionSlideInfoProps {
  imageUrl: string;
  subTitle: string;
  buttonLabel: string;
}
export const FeedCollectionSlideInfo: React.FC<
  FeedCollectionSlideInfoProps
> = ({ imageUrl, subTitle, buttonLabel }) => {
  return (
    <div className="feed-collection-title-slide-content-side">
      <div className="feed-collection-title-slide-content-side-title">
        <img src={imageUrl} alt="" />
      </div>
      <div className="feed-collection-title-slide-content-side-subTitle">
        {subTitle}
      </div>
      <div className="feed-collection-title-slide-content-side-button">
        {buttonLabel}
      </div>
    </div>
  );
};
