import React, { useState } from "react";

const ChipInput = () => {
  const [chipsInput, setChipsInput] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setChipsInput([...chipsInput, e.target.value]);
      e.target.value = "";
    }
  };

  const handleRemove = (index) => {
    const newChips = [...chipsInput];
    newChips.splice(index, 1);
    setChipsInput(newChips);
  };

  return (
    <div className="flex justify-center mt-4">
      <div className="w-full max-w-md">
        <input
          className="w-full p-2 border border-black rounded-md"
          type="text"
          placeholder="Enter a tag"
          onKeyDown={handleKeyDown}
        />

        <div className="flex flex-wrap mt-2 gap-3">
          {chipsInput?.map((chips, index) => (
            <div key={index} className="bg-gray-300 p-2 rounded-2xl">
              {chips}{" "}
              <span
                className="mx-2 cursor-pointer"
                onClick={() => handleRemove(index)}
              >
                ❌
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChipInput;
