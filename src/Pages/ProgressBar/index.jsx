import React, { useEffect, useState } from "react";

const TARGETS = [0, 10, 30, 50, 60, 90];

const clamp = (value) => Math.min(100, value);

const Bar = ({ value }) => {
  const percent = clamp(value);

  return (
    <div
      className="relative h-6 border border-black rounded-md m-2 overflow-hidden"
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full w-full bg-blue-500 transition-transform duration-500 ease-out"
        style={{ transform: `translateX(${percent - 100}%)` }}
      />
      <span className="absolute inset-0 flex items-center justify-center text-xs">
        {percent}%
      </span>
    </div>
  );
};

const ProgressBar = () => {
  const [progress, setProgress] = useState(() => TARGETS.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => setProgress(TARGETS), 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      {progress.map((value, index) => (
        <Bar key={index} value={value} />
      ))}
    </div>
  );
};

export default ProgressBar;
