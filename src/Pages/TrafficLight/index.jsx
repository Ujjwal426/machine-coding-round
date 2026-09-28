import React, { useEffect, useState } from "react";

// Real-world order: red -> green -> yellow -> red
const config = [
  { color: "red", time: 4000 },
  { color: "yellow", time: 1000 },
  { color: "green", time: 3000 },
];

const TrafficLight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % config.length);
    }, config[currentIndex].time);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="inline-flex flex-col bg-black rounded-xl p-2 m-4">
      {config.map((item, index) => {
        return (
          <div
            key={item.color}
            style={{ background: currentIndex === index ? item.color : "gray" }}
            className="rounded-full w-10 h-10 m-2"
          ></div>
        );
      })}
    </div>
  );
};

export default TrafficLight;
