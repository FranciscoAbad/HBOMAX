import React, { useState } from "react";
import "./Star.css";

interface DOMRect extends DOMRectReadOnly {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
  readonly left: number;
}

interface StarProps {
  index: number;
  rating: number;
  setRating: (rating: number) => void;
  hoverRating: number;
  setHoverRating: (rating: number) => void;
  hasVoted: number;
}
export const Star: React.FC<StarProps> = ({
  index,
  rating,
  setRating,
  hoverRating,
  setHoverRating,
  hasVoted,
}) => {
  const [hoverPosition, setHoverPosition] = useState<string>("");

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (hasVoted === 0) {
      const target = event.currentTarget as HTMLDivElement;
      const rect: DOMRect = target.getBoundingClientRect();
      const hoverValue = event.clientX - rect.left;
      setHoverPosition(
        hoverValue < rect.width / 2 ? "first-half" : "second-half"
      );
      setHoverRating(index + (hoverValue < rect.width / 2 ? 0.5 : 1));
    }
  };

  const handleMouseEnter = () => {
    if (hasVoted === 0) {
      setHoverRating(index + (hoverPosition === "second-half" ? 1 : 0.5));
      console.log(hoverRating);
    }
  };

  const handleMouseLeave = () => {
    if (hasVoted === 0) {
      setHoverRating(0);
      setHoverPosition("");
    }
  };

  const handleClick = () => {
    if (hasVoted === 0) {
      setRating(index + (hoverPosition === "second-half" ? 1 : 0.5));
      console.log(rating);
    }
  };

  const isFilled = rating >= index + 1;
  const isHalfFilled = rating >= index + 0.5 && rating < index + 1;
  const isHovered = hoverRating >= index + 1;
  const isHalfHovered = hoverRating >= index + 0.5 && hoverRating < index + 1;

  return (
    <div
      className={`star ${isFilled ? "filled" : ""} ${
        isHalfFilled ? "half-filled" : ""
      } ${isHovered ? "hovered" : ""} ${isHalfHovered ? "half-hovered" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div
        className={`star-inner ${
          hoverPosition === "first-half" && "first-half-hover"
        } ${hoverPosition === "second-half" && "second-half-hover"}`}
      >
        ★
      </div>
    </div>
  );
};
