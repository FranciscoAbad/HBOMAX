import React, { useState } from "react";
import { FeedNavBar } from "../FeedNavBar/FeedNavBar";
import { FeedSideBar } from "../FeedSideBar/FeedSideBar";

interface FeedNavProps {
  title?: string;
}

export const FeedNav: React.FC<FeedNavProps> = ({ title }) => {
  const [sideBar, toggleSideBar] = useState<boolean>(false);

  const displaySideBar = () => {
    toggleSideBar(!sideBar);
  };
  return (
    <>
      <FeedNavBar toggleSideBar={displaySideBar} title={title} />
      {sideBar ? <FeedSideBar toggleViewSideBar={displaySideBar} /> : <></>}
    </>
  );
};
