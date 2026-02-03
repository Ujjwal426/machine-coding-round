import React, { useEffect, useRef, useState } from "react";

const OTP_DIGIT = 6;

const OtpInput = () => {
  const [inputArr, setInputArr] = useState([...Array(OTP_DIGIT)].map(() => ""));
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleInputChange = (value, index) => {
    if (isNaN(value)) return;
    const newInputArr = [...inputArr];

    newInputArr[index] = value?.trim()?.slice(-1);
    setInputArr(newInputArr);

    value?.trim() && refArr.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !inputArr[index]) {
      refArr.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <div className="w-full max-w-md flex flex-wrap gap-4">
        {inputArr?.map((_, index) => {
          return (
            <input
              className="border border-black w-[60px] h-[60px] text-3xl text-center"
              key={index}
              value={inputArr[index]}
              onChange={(e) => handleInputChange(e.target.value, index)}
              ref={(input) => (refArr.current[index] = input)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OtpInput;
