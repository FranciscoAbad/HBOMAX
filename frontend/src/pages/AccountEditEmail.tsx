import React from "react";

import { FeedNav } from "../features/feed/components/FeedNav/FeedNav";
import { AccountEditFormEmail } from "../features/account/components/AccountEditForm/AccountEditFormEmail";
import "./Account.css";

export const AccountEditEmail: React.FC = () => {
  return (
    <div className="account">
      <FeedNav />
      <AccountEditFormEmail />
    </div>
  );
};
