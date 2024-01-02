import React from "react";

interface SliderTitleSide {
  title: string;
  subTitle: string;
  buttonLabel: string;
}
interface FeedTitleSideContentProps {
  sideSlide: SliderTitleSide;
}
export const FeedTitleSideContent: React.FC<FeedTitleSideContentProps> = ({
  sideSlide,
}) => {
  return (
    <div className="feed-title-slide-content-side">
      <div className="feed-title-slide-content-side-title">
        {sideSlide.title}
      </div>
      <div className="feed-title-slide-content-side-subTitle">
        {sideSlide.subTitle}
      </div>
      <div className="feed-title-slide-content-side-button">
        {sideSlide.buttonLabel}
      </div>
    </div>
  );
};
