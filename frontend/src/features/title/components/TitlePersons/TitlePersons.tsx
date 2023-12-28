import React, { useEffect, useState } from "react";
import { Cast } from "../../../../utils/GlobalInterfaces";
import "./TitlePersons.css";
import { firstLetterToUpperCase, formatName } from "../../utils/TitleUtils";

interface TitlePersonsProps {
  cast: Cast[];
  rating: string;
}

export const TitlePersons: React.FC<TitlePersonsProps> = ({ cast, rating }) => {
  const [writers, setWriters] = useState<Cast[]>();
  const [directors, setDirectors] = useState<Cast[]>();
  const [actors, setActors] = useState<Cast[]>();
  const [producers, setProducers] = useState<Cast[]>();

  useEffect(() => {
    setActors(cast.filter((cast) => cast.role.role === "actor"));
    setWriters(cast.filter((cast) => cast.role.role === "writer"));
    setDirectors(cast.filter((cast) => cast.role.role === "director"));
    setProducers(cast.filter((cast) => cast.role.role === "producer"));
  }, [cast]);
  return (
    <div className="title-persons">
      <div className="title-persons-side">
        {actors && actors.length > 0 ? (
          <div className="title-persons-group">
            <h3 className="title-persons-group-title">Cast & Crew</h3>
            {actors &&
              actors.map((item) => (
                <div className="title-persons-group-row" key={item.castInfoId}>
                  <p className="title-persons-group-row-role">
                    {formatName(item.characterName)}
                  </p>
                  <p className="title-persons-group-row-name">
                    {firstLetterToUpperCase(item.person.firstName)}{" "}
                    {firstLetterToUpperCase(item.person.lastName)}
                  </p>
                </div>
              ))}
          </div>
        ) : (
          <></>
        )}
        {directors && directors.length > 0 ? (
          <div className="title-persons-group">
            <h3 className="title-persons-group-title">Directors</h3>
            {directors.map((item) => (
              <div className="title-persons-group-row" key={item.castInfoId}>
                <p className="title-persons-group-row-role">Director</p>
                <p className="title-persons-group-row-name">
                  {firstLetterToUpperCase(item.person.firstName)}{" "}
                  {firstLetterToUpperCase(item.person.lastName)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="title-persons-side">
        {writers && writers.length > 0 ? (
          <div className="title-persons-group">
            <h3 className="title-persons-group-title">Writers</h3>
            {writers.map((item) => (
              <div className="title-persons-group-row" key={item.castInfoId}>
                <p className="title-persons-group-row-role">
                  {firstLetterToUpperCase(item.writerRole)}
                </p>
                <p className="title-persons-group-row-name">
                  {firstLetterToUpperCase(item.person.firstName)}{" "}
                  {firstLetterToUpperCase(item.person.lastName)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
        <div className="title-persons-group">
          <h3 className="title-persons-group-title">Rating Information</h3>
          <p className="title-persons-group-row-role">{rating}</p>
        </div>
      </div>
    </div>
  );
};
