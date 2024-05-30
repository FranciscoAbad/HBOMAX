import React, { useEffect, useState } from "react";
import { FeedNavBar } from "../features/feed/components/FeedNavBar/FeedNavBar";
import { FeedNav } from "../features/feed/components/FeedNav/FeedNav";
import { SearchBar } from "../features/search/components/SearchBar";
import "./Search.css";
import { FeedTitlesGrid } from "../features/feed/components/FeedGridTitles/FeedTitlesGrid";
import { FeedTitleSlider } from "../features/feed/components/FeedTitleSlider/FeedTitleSlider";
import { FeedFooter } from "../features/feed/components/FeedFooter/FeedFooter";
import { useFetchTitles } from "../hooks/useFetchTitles";
import axios from "axios";
import { TitleDTO } from "../utils/GlobalInterfaces";

export const Search: React.FC = () => {
  const [param, setParam] = useState<string>("");

  const updateParam = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setParam(e.target.value);
  };

  useEffect(() => {}, [param]);
  return (
    <div className="search">
      <FeedNav />
      <SearchBar changeValue={updateParam} />

      {param ? (
        <FeedTitlesGrid fetchUrl={`title/search/${param}`} banner={true} />
      ) : (
        <FeedTitleSlider
          fetchUrl="title/all/title/trending"
          title="Most searched on HBOMax"
          subTitle=""
          banner={false}
          big={false}
          info={false}
        />
      )}
      <FeedFooter />
    </div>
  );
};
