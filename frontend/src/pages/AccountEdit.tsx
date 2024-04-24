import React from "react";

import { FeedNav } from "../features/feed/components/FeedNav/FeedNav";
import { AccountEditFormEmail } from "../features/account/components/AccountEditForm/AccountEditFormEmail";

export const AccountEdit: React.FC = () => {
  return (
    <div>
      <FeedNav />
      <AccountEditFormEmail />
    </div>
  );
};
