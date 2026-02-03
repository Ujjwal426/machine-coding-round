import React from "react";

const AccordianItem = ({ title, content, isOpen, setIsOpen }) => {
  return (
    <div className="border border-black">
      <div className="bg-gray-400 p-2 cursor-pointer" onClick={setIsOpen}>
        {title}
      </div>
      {isOpen && <div className="p-2">{content}</div>}
    </div>
  );
};

export default AccordianItem;
