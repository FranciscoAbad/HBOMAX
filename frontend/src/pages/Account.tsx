import React from "react";
import { FeedNav } from "../features/feed/components/FeedNav/FeedNav";
import { AccountDetails } from "../features/account/components/AccountDetails/AccountDetails";
import "./Account.css";
export const Account: React.FC = () => {
  return (
    <div className="account">
      <FeedNav />
      <AccountDetails />
    </div>
  );
};
