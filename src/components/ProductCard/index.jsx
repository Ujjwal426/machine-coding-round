import React from "react";

const ProductCard = ({
  title,
  price,
  description,
  thumbnail,
  discountPercentage,
}) => {
  return (
    <div className="m-4 p-4 border border-solid border-black w-66 ">
      <img className="h-48 w-66 object-fill" src={thumbnail} alt={title} />
      <h1 className="p-2 font-bold text-xl">{title}</h1>
      <h2 className="p-1 text-lg">
        Rs. {price} - discount of {discountPercentage}%
      </h2>
      <p className="p-1 text-sm">{description}</p>
    </div>
  );
};

export default ProductCard;
