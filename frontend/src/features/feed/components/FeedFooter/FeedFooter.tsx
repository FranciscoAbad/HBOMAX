import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import "./FeedFooter.css";

export const FeedFooter: React.FC = () => {
  return (
    <div className="feed-footer">
      <div className="feed-footer-top">
        <p className="feed-footer-top-text">
          © 2023 WarnerMedia Direct, LLC. All rights reserved.
        </p>
      </div>
      <div className="feed-footer-nav">
        <div className="feed-footer-nav-social">
          <div className="feed-footer-nav-social-button">
            <YouTubeIcon sx={{ width: 20, height: 20, color: "#8A8A8A" }} />
          </div>
          <div className="feed-footer-nav-social-button">
            <TwitterIcon sx={{ width: 20, height: 20, color: "#8A8A8A" }} />
          </div>
          <div className="feed-footer-nav-social-button">
            <FacebookIcon sx={{ width: 20, height: 20, color: "#8A8A8A" }} />
          </div>
          <div className="feed-footer-nav-social-button">
            <InstagramIcon sx={{ width: 20, height: 20, color: "#8A8A8A" }} />
          </div>
        </div>
        <div className="feed-footer-nav-info">
          <button className="feed-footer-nav-info-button">Privacy</button>
          <button className="feed-footer-nav-info-button">Terms</button>
          <button className="feed-footer-nav-info-button">Help</button>
          <button className="feed-footer-nav-info-button">Devices</button>
        </div>
      </div>
    </div>
  );
};
