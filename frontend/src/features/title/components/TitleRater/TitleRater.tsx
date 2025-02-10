import React, { ReactEventHandler, useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import "./Star.css";
import { Star } from "./Star";
import { makeVote } from "../../../../hooks/makeVote";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/Store";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useHasVoted } from "../../../../hooks/useHasVoted";

interface TitleRater {
  titleId: number;
  titlePopularity: number;
  titleVotes: number;
}

export const TitleRater: React.FC<TitleRater> = ({
  titleId,
  titlePopularity,
  titleVotes,
}) => {
  let hasVoted = useHasVoted(titleId);
  const [rating, setRating] = useState<number>(0);
  const [showButton, setShowButton] = useState<boolean>(false);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const userToken = useSelector((state: RootState) => state.user.token);

  const handleClickStar = (rating: number) => {
    setRating(rating);
    setShowButton(true);
  };

  useEffect(() => {}, [hasVoted, titlePopularity]);
  console.log(hasVoted);
  const vote = () => {
    makeVote(titleId, rating, userToken);
    setShowButton(false);
  };
  return (
    <div className="title-rater">
      <div className="title-rater-row">
        <div className="star-rating">
          {[...Array(5)].map((_, index) => (
            <Star
              hasVoted={hasVoted}
              key={index}
              index={index}
              rating={hasVoted != 0 ? hasVoted : rating}
              setRating={handleClickStar}
              hoverRating={hasVoted != 0 ? hasVoted : hoverRating}
              setHoverRating={setHoverRating}
            />
          ))}
        </div>
        {rating !== 0 && hasVoted == 0 && showButton ? (
          <div className="title-rater-row-button" onClick={vote}>
            <CheckCircleIcon />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="title-rater-row">
        <div className="title-rater-row-description">
          <span>{titlePopularity}</span> of <span>10 </span>({titleVotes}{" "}
          reviews)
        </div>
      </div>
    </div>
  );
};
