import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState([0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    setTimeout(() => {
      setProgress([0, 10, 30, 50, 60, 90]);
    }, 10);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md">
        {progress?.map((item, index) => (
          <div
            className="border border-black rounded-md m-2 overflow-hidden"
            key={index}
          >
            <div
              className={`${
                item < 4 ? "text-black" : "text-blue-100"
              } bg-blue-500 text-xs font-medium leading-none rounded-md transition-all duration-100 ease-in`}
              style={{
                transform: `translateX(${item - 100}%)`,
                textAlign: item < 4 ? "left" : "right",
                padding: "4px",
              }}
              role="progressbar"
              aria-valuenow={item}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {item}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
