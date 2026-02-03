import React, { useState } from "react";

const StarRating = ({ size = 5, rating = 0, onChange = () => {} }) => {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex gap-1">
      {[...Array(size)].map((_, index) => {
        const starValue = index + 1;

        const isActive = hovered ? starValue <= hovered : starValue <= rating;

        return (
          <span
            key={index}
            className={`cursor-pointer text-xl transition-colors duration-200 ${
              isActive ? "text-amber-400" : "text-gray-300"
            }`}
            onMouseEnter={() => setHovered(starValue)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => onChange(starValue)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
