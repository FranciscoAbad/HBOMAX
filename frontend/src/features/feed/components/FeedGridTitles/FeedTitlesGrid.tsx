import React from "react";
import "./FeedTitlesGrid.css";
import { useFetchTitles } from "../../../../hooks/useFetchTitles";
import { FeedTitleSliderItem } from "../FeedTitleSliderItem/FeedTitleSliderItem";

interface FeedTitlesGridProps {
  fetchUrl: string;
}

export const FeedTitlesGrid: React.FC<FeedTitlesGridProps> = ({ fetchUrl }) => {
  const { data, isFetchig } = useFetchTitles({ fetchUrl });

  return (
    <div className="feed-titles-grid-container">
      <div className="feed-titles-grid">
        {data.map((item) => (
          <FeedTitleSliderItem item={item} banner={false} />
        ))}
      </div>
    </div>
  );
};
