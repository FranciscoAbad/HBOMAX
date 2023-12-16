import React, { useState } from "react";
import { FeedNavBar } from "../FeedNavBar/FeedNavBar";
import { FeedSideBar } from "../FeedSideBar/FeedSideBar";

export const FeedNav: React.FC = () => {
  const [sideBar, toggleSideBar] = useState<boolean>(false);

  const displaySideBar = () => {
    toggleSideBar(!sideBar);
  };
  return (
    <>
      <FeedNavBar toggleSideBar={displaySideBar} />
      {sideBar ? <FeedSideBar toggleViewSideBar={displaySideBar} /> : <></>}
    </>
  );
};
