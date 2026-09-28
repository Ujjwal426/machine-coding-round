import React, { useState } from "react";
import { AccordianItem } from "../../components";

const data = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favourite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const Accordian = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div className="flex justify-center mt-2">
      <div className="w-full max-w-md">
        {data?.map((item, index) => {
          return (
            <AccordianItem
              title={item.title}
              content={item.content}
              isOpen={isOpen === index}
              setIsOpen={() => {
                setIsOpen(isOpen === index ? null : index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Accordian;
