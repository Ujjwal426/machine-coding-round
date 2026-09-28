import React, { useState } from "react";

const StarRating = ({ size = 5, rating = 0, handleRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const currentRating = hoverRating || rating;

  const handleHover = (event, value) => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const mousePosition = event.clientX - left;
    const newRating = mousePosition < width / 2 ? value - 0.5 : value;
    setHoverRating(newRating);
  };

  const handleClick = (event, value) => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const mousePosition = event.clientX - left;
    const newRating = mousePosition < width / 2 ? value - 0.5 : value;
    handleRatingChange(newRating);
  };

  return (
    <div>
      {[...Array(size)].map((_, index) => {
        const value = index + 1;
        const isFull = currentRating >= value;
        const isHalf = currentRating >= value - 0.5 && currentRating < value;
        return (
          <span
            key={value}
            onMouseMove={(event) => handleHover(event, value)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={(event) => handleClick(event, value)}
            className="relative cursor-pointer text-3xl"
          >
            <span className="text-gray-300">★</span>

            {/* Filled / half-filled star */}
            {(isFull || isHalf) && (
              <span
                className="absolute left-0 top-0 overflow-hidden text-yellow-400"
                style={{
                  width: isFull ? "100%" : "50%",
                }}
              >
                ★
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
