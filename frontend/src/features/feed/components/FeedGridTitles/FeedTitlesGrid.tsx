import React, { useEffect } from "react";
import "./FeedTitlesGrid.css";
import { useFetchTitles } from "../../../../hooks/useFetchTitles";
import { FeedTitleSliderItem } from "../FeedTitleSliderItem/FeedTitleSliderItem";

interface FeedTitlesGridProps {
  fetchUrl: string;
}

export const FeedTitlesGrid: React.FC<FeedTitlesGridProps> = ({ fetchUrl }) => {
  const { data, isFetchig } = useFetchTitles({ fetchUrl });
  useEffect(() => {}, [data]);

  return (
    <div className="feed-titles-grid-container">
      <div className="feed-titles-grid">
        {data.map((item, index) => (
          <FeedTitleSliderItem
            item={item}
            banner={false}
            info={false}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
