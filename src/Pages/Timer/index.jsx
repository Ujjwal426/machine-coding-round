import React, { useEffect, useState } from "react";

const formatTime = (totalSeconds) => {
  const m = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const s = String(totalSeconds % 60).padStart(2, "0");
  return `${m}:${s}`;
};

const Timer = () => {
  const [inputValue, setInputValue] = useState("");
  const [time, setTime] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    if (time === 0) {
      setIsRunning(false);
      return;
    }

    const id = setTimeout(() => setTime((prev) => prev - 1), 1000);
    return () => clearInterval(id);
  }, [isRunning, time]);

  const handleStart = () => {
    if (time === 0) {
      if (Number(inputValue) <= 0) return;
      setTime(Number(inputValue));
    }
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setInputValue("");
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <input
        type="number"
        className="border border-gray-500 p-2 rounded-md"
        value={inputValue}
        disabled={time > 0}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <div className="text-5xl font-mono">{formatTime(time)}</div>

      <div className="flex gap-2 items-center">
        {isRunning ? (
          <button
            className="px-4 py-1.5 rounded-md text-white bg-yellow-500 cursor-pointer"
            onClick={() => setIsRunning(false)}
          >
            Pause
          </button>
        ) : (
          <button
            className="px-4 py-1.5 rounded-md text-white bg-green-500 cursor-pointer"
            onClick={handleStart}
          >
            {time > 0 ? "Resume" : "Start"}
          </button>
        )}

        <button
          className="px-4 py-1.5 rounded-md text-white bg-red-500 cursor-pointer"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
