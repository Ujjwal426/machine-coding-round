import React, { useState } from "react";
import { StarRating } from "../../components";

const StarRatingPage = () => {
  const [currentRating, setCurrentRating] = useState(3);

  const handleRatingChange = (newRating) => {
    setCurrentRating(newRating);
  };

  return (
    <div className="flex justify-center mt-2">
      <div className="w-full max-w-md">
        <h1>Star Rating</h1>
        <StarRating
          size={5}
          handleRatingChange={handleRatingChange}
          rating={currentRating}
        />
      </div>
    </div>
  );
};

export default StarRatingPage;
