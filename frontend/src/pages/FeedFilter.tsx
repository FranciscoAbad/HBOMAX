import React from "react";
import { useParams } from "react-router-dom";
import { FeedContentFilter } from "../features/feed/components/FeedContentFilter/FeedContentFilter";
import "./FeedFilter.css";

export const FeedFilter: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  return (
    <div className="feed-filter">
      <FeedContentFilter type={type} />
    </div>
  );
};
