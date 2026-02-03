import React, { useEffect, useState } from "react";

const imageUrls = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
];

const ImageSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      handleNextImage();
    }, 3000);
    return () => clearInterval(i);
  }, []);

  const handleNextImage = () => {
    setImageIndex((prev) => (prev + 1) % imageUrls.length);
  };

  const handlePrevImage = () => {
    setImageIndex((prev) => (prev - 1 < 0 ? imageUrls.length - 1 : prev - 1));
  };

  return (
    <div className="relative flex justify-center items-center mt-5">
      <img
        className="w-[800px] h-[400px] rounded-lg object-cover"
        src={imageUrls[imageIndex]}
        alt="slider"
      />

      {/* Left Arrow */}
      <button
        onClick={handlePrevImage}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
      >
        <img
          className="w-6 h-6 invert"
          src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
          alt="previous"
        />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNextImage}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
      >
        <img
          className="w-6 h-6 invert"
          src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
          alt="next"
        />
      </button>
    </div>
  );
};

export default ImageSlider;
