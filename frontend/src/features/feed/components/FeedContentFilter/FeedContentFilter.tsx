import React, { useState } from "react";
import types from "../../../../assets/Json/filters.json";
import { FeedTitleSlider } from "../FeedTitleSlider/FeedTitleSlider";
import { FeedHeaderSlider } from "../FeedHeaderSlider/FeedHeaderSlider";
import "./FeedContentFilter.css";
import { FeedNav } from "../FeedNav/FeedNav";
import { FeedContentFilterNav } from "../FeedContentFilterNav/FeedContentFilterNav";
import { FeedTitlesGrid } from "../FeedGridTitles/FeedTitlesGrid";
import { filterItsGenre } from "./utils/determineFetchUrl";

interface FilterTypes {
  label: string;
}

interface FeedContentFilterTypes {
  type: string | undefined;
}

export const FeedContentFilter: React.FC<FeedContentFilterTypes> = ({
  type,
}) => {
  const filters: FilterTypes[] = types as FilterTypes[];

  const [filter, setFilter] = useState<string>("featured");

  return (
    <div className="">
      <FeedNav />
      <FeedHeaderSlider fetchUrl={`title/title/type/${type}/trending`} />
      <FeedContentFilterNav changeValue={setFilter} types={[]} />
      {filter === "featured" ? (
        <>
          <FeedTitleSlider
            fetchUrl={`title/title/type/${type}/trending`}
            title="Trending"
            subTitle=""
            banner={false}
            big={false}
            info={false}
          />
          <FeedTitleSlider
            fetchUrl={`title/title/type/${type}/just-added`}
            title="Just added"
            subTitle=""
            banner={true}
            big={true}
            info={false}
          />
          <FeedTitleSlider
            fetchUrl={`title/title/type/${type}/just-added`}
            title="Trending"
            subTitle=""
            banner={false}
            big={true}
            info={true}
          />
        </>
      ) : (
        <FeedTitlesGrid
          fetchUrl={
            filterItsGenre(filter)
              ? `title/title/type/${type}/genre/${filter}`
              : `title/title/type/${type}/${filter}`
          }
        />
      )}
    </div>
  );
};
