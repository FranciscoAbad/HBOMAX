import React, { useEffect, useState } from "react";
import "./FeedTitlesGrid.css";
import { useFetchTitles } from "../../../../hooks/useFetchTitles";
import { FeedTitleSliderItem } from "../FeedTitleSliderItem/FeedTitleSliderItem";
import { StyledGrid } from "./FeedStyledGrid";
import { LoadingPage } from "../../../../components/LoadingPage/LoadingPage";

interface FeedTitlesGridProps {
  fetchUrl: string;
  banner: boolean;
}

export const FeedTitlesGrid: React.FC<FeedTitlesGridProps> = ({
  fetchUrl,
  banner,
}) => {
  const { data, isFetchig } = useFetchTitles({ fetchUrl });

  useEffect(() => {}, [data]);

  return (
    <div className="feed-titles-grid-container">
      {!isFetchig && (
        <StyledGrid banner={banner}>
          {data.map((item, index) => (
            <FeedTitleSliderItem
              item={item}
              banner={banner}
              info={banner ? true : false}
              key={index}
            />
          ))}
        </StyledGrid>
      )}
    </div>
  );
};
