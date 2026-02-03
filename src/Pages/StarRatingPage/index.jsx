import React, { useState } from "react";
import { StarRating } from "../../components";

const StarRatingPage = () => {
  const [currentRating, setCurrentRating] = useState(3);

  const handleRatingChange = (newRating) => {
    setCurrentRating(newRating);
  };

  return (
    <div>
      <h1>Star Rating</h1>
      <StarRating
        size={5}
        onChange={handleRatingChange}
        rating={currentRating}
      />
    </div>
  );
};

export default StarRatingPage;
