import React from "react";
import { Link } from "react-router";

const CustomHeader = () => {
  return (
    <header className="bg-black shadow-md">
      <div className="max-w-7xl mx-5 py-3 flex justify-between items-center">
        <nav className="flex gap-4">
          <Link to="/" className="text-white hover:text-blue-600">
            Home
          </Link>

          <Link to="/accordian" className="text-white hover:text-blue-600">
            Accordian
          </Link>

          <Link
            to="/nested-comments"
            className="text-white hover:text-blue-600"
          >
            Nested Comments
          </Link>

          <Link to="/image-slider" className="text-white hover:text-blue-600">
            Image Slider
          </Link>

          <Link to="/pagination" className="text-white hover:text-blue-600">
            Pagination
          </Link>

          <Link to="/live-chat" className="text-white hover:text-blue-600">
            Live Chat
          </Link>

          <Link to="/search" className="text-white hover:text-blue-600">
            Search
          </Link>

          <Link to="/cricket-score" className="text-white hover:text-blue-600">
            Cricket
          </Link>

          <Link to="/tab-form" className="text-white hover:text-blue-600">
            Tab Form
          </Link>

          <Link to="/progress-bar" className="text-white hover:text-blue-600">
            Progress Bar
          </Link>

          <Link to="/otp-input" className="text-white hover:text-blue-600">
            Otp
          </Link>

          <Link to="/chip-input" className="text-white hover:text-blue-600">
            Chips Input
          </Link>

          <Link
            to="/nested-checkbox"
            className="text-white hover:text-blue-600"
          >
            Checkbox
          </Link>

          <Link to="/star-rating" className="text-white hover:text-blue-600">
            Rating
          </Link>

          <Link to="/traffic-light" className="text-white hover:text-blue-600">
            Traffic Light
          </Link>
        </nav>{" "}
      </div>
    </header>
  );
};

export default CustomHeader;
