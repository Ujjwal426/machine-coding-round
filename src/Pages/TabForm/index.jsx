import React from "react";

const TabForm = () => {
  const tabs = [
    {
      name: "Profile",
    },
    {
      name: "Intrests",
    },
    {
      name: "Settings",
    },
  ];

  return (
    <div>
      <div className="d-flex">
        {tabs?.map((tab) => (
          <div>{tab.name}</div>
        ))}
      </div>
    </div>
  );
};

export default TabForm;
