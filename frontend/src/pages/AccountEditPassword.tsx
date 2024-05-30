import React from "react";
import { FeedNav } from "../features/feed/components/FeedNav/FeedNav";
import "./Account.css";
import { AccountEditFormPassword } from "../features/account/components/AccountEditForm/AccountEditFormPassword";

export const AccountEditPassword: React.FC = () => {
  return (
    <div className="account">
      <FeedNav />
      <AccountEditFormPassword />
    </div>
  );
};
