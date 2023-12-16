import React, { useState } from "react";
import "./FeedSideBar.css";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface FeedSideBarProps {
  toggleViewSideBar: () => void;
}

export const FeedSideBar: React.FC<FeedSideBarProps> = ({
  toggleViewSideBar,
}) => {
  const [sideBarSubMenu, toggleSidBarSubMenu] = useState<boolean>(false);

  const displaySubMenu = () => {
    toggleSidBarSubMenu(!sideBarSubMenu);
  };
  return (
    <div className="feed-side-bar-fixed">
      <div className="feed-side-bar-container">
        <div className="feed-side-bar">
          <div className="feed-side-bar-column">
            <div className="feed-side-bar-column-header">
              <div className="feed-side-bar-column-header-row">
                <div
                  onClick={toggleViewSideBar}
                  className="feed-side-bar-column-header-row-button"
                >
                  <CloseIcon sx={{ width: 24 }} />
                </div>
              </div>
            </div>
            <div className="feed-side-bar-column-list">
              <div className="feed-side-bar-column-list-button">Home</div>
              <div className="feed-side-bar-column-list-button">Series</div>
              <div className="feed-side-bar-column-list-button">Movies</div>
              <div className="feed-side-bar-column-list-button">Originals</div>
              <div className="feed-side-bar-column-list-button">Just Added</div>
              <div className="feed-side-bar-column-list-button">
                Last Chance
              </div>
              <div className="feed-side-bar-column-list-button">
                Coming Soon
              </div>
              <div className="feed-side-bar-column-list-button">
                Trending Now
              </div>
            </div>
            <div className="feed-side-bar-column-genres-display">
              <div
                onClick={displaySubMenu}
                className="feed-side-bar-column-genres-display-button"
              >
                <h4 className="feed-side-bar-column-genres-display-button-text">
                  Genres
                </h4>
                <ArrowForwardIosIcon
                  sx={{
                    width: 22,
                  }}
                />
              </div>
            </div>
            <div className="feed-side-bar-column-brands">
              <div className="feed-side-bar-column-brands-row">
                <div className="feed-side-bar-column-brands-row-brand">
                  <img src="https://art-gallery-latam.api.hbo.com/images/hbomax-latam-brand-hbo/logo?v=2dd4d56700b704256d5ebe9b7da3ba65&amp;size=80x45&amp;compression=low&amp;protection=false&amp;scaleDownToFit=false&amp;language=en-us" />
                </div>
                <div className="feed-side-bar-column-brands-row-brand">
                  <img src="https://art-gallery-latam.api.hbo.com/images/hbomax-latam-brand-max-originals/logo?v=da684db57fe4f1900d43bf3ae0439997&amp;size=80x45&amp;compression=low&amp;protection=false&amp;scaleDownToFit=false&amp;language=en-us" />
                </div>
              </div>
              <div className="feed-side-bar-column-brands-row">
                <div className="feed-side-bar-column-brands-row-brand">
                  <img src="https://art-gallery-latam.api.hbo.com/images/hbomax-latam-brand-warner-brothers/logo?v=0d3b476086e6b31370febcddb6396419&amp;size=80x45&amp;compression=low&amp;protection=false&amp;scaleDownToFit=false&amp;language=en-us" />
                </div>
                <div className="feed-side-bar-column-brands-row-brand">
                  <img src="https://art-gallery-latam.api.hbo.com/images/hbomax-latam-brand-dc/logo?v=5ef4810b50f78b786fbd125024b7dde2&amp;size=80x45&amp;compression=low&amp;protection=false&amp;scaleDownToFit=false&amp;language=en-us" />
                </div>
              </div>
              <div className="feed-side-bar-column-brands-row">
                <div className="feed-side-bar-column-brands-row-brand">
                  <img src="https://art-gallery-latam.api.hbo.com/images/hbomax-latam-brand-cartoon-network/logo?v=e80a0a4df8a6d852237efa9658df657b&amp;size=80x45&amp;compression=low&amp;protection=false&amp;scaleDownToFit=false&amp;language=en-us" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {sideBarSubMenu ? (
        <div className="feed-side-bar-genres">
          <div className="feed-side-bar-genres-column">
            <div className="feed-side-bar-genres-column-button">Action</div>
            <div className="feed-side-bar-genres-column-button">Animation</div>
            <div className="feed-side-bar-genres-column-button">Comedy</div>
            <div className="feed-side-bar-genres-column-button">Crime</div>
            <div className="feed-side-bar-genres-column-button">
              Documentaries
            </div>
            <div className="feed-side-bar-genres-column-button">Drama</div>
            <div className="feed-side-bar-genres-column-button">
              Fantasy & Sci-Fi
            </div>
            <div className="feed-side-bar-genres-column-button">
              Horror & Suspense
            </div>
            <div className="feed-side-bar-genres-column-button">
              International
            </div>
            <div className="feed-side-bar-genres-column-button">
              Kids & Family
            </div>
            <div className="feed-side-bar-genres-column-button">
              Local Productions
            </div>
            <div className="feed-side-bar-genres-column-button">Romance</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
