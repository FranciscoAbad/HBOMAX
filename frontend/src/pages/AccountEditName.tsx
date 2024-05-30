import React from "react";
import { FeedNav } from "../features/feed/components/FeedNav/FeedNav";
import "./Account.css";
import { AccountEditFormName } from "../features/account/components/AccountEditForm/AccountEditFormName";

export const AccountEditName: React.FC = () => {
  return (
    <div className="account">
      <FeedNav />
      <AccountEditFormName />
    </div>
  );
};
