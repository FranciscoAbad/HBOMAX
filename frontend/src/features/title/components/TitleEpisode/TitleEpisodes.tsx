import React, { useEffect, useState } from "react";
import { FullTitle, TitleDTO } from "../../../../utils/GlobalInterfaces";
import axios from "axios";
import "./TitleEpisodes.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { firstLettesToUpperCaseAndReplace } from "../../utils/TitleUtils";
import { useNavigate } from "react-router-dom";
interface TitleEpisodesProps {
  title: string;
}

export const TitleEpisodes: React.FC<TitleEpisodesProps> = ({ title }) => {
  const [episodes, setEpisodes] = useState<TitleDTO[]>();
  const [dropMenu, setDropMenu] = useState<boolean>(false);
  const [seasonsNr, setSeasonsNr] = useState<number>(0);
  const [season, setSeason] = useState<number>(1);
  const navigate = useNavigate();
  useEffect(() => {
    const countSeasons = async () => {
      try {
        const response = await axios.get<number>(
          `http://localhost:8080/title/title/${title}/seasons`
        );

        setSeasonsNr(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    countSeasons();
  }, [title]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await axios.get<TitleDTO[]>(
          `http://localhost:8080/title/all/title/${title}/season/${season}`
        );

        setEpisodes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchInfo();
  }, [title, season]);

  const displayDropMenu = () => {
    setDropMenu(!dropMenu);
  };
  return (
    <div className="title-episodes">
      <div className="title-episodes-header">
        <div className="title-episodes-header-button">
          <button
            onClick={displayDropMenu}
            className="title-episodes-header-button-text"
          >
            Season {season}
            <ExpandLessIcon
              sx={{
                marginLeft: 5,
                width: 24,
                height: 24,
              }}
            />
          </button>
        </div>
        {dropMenu ? (
          <div className="title-episodes-header-nav">
            {Array.from({ length: seasonsNr }, (_, index) => (
              <div
                key={index}
                onClick={() => {
                  setSeason(index + 1);
                }}
                className="title-episodes-header-nav-button"
              >
                {`Season ${index + 1}`}
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="title-episodes-content">
        <div className="title-episodes-content-grid">
          {episodes &&
            episodes.map((item) => (
              <div
                key={item.titleId}
                onClick={() => {
                  navigate(`/title/${item.type}/${item.titleId}`);
                }}
                className="title-episodes-content-grid-item"
              >
                <div className="title-episodes-content-grid-item-banner">
                  <img src={item.banner.imageURL} alt="" />
                </div>
                <div className="title-episodes-content-grid-item-info">
                  <div className="title-episodes-content-grid-item-info-title">
                    {item.episodeNr}.{" "}
                    {firstLettesToUpperCaseAndReplace(item.episodeName)}
                  </div>
                  <div className="title-episodes-content-grid-item-info-subTitle">
                    {item.runtime} MIN {item.rating}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
