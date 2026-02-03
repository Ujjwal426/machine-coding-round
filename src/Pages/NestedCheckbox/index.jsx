import React, { useState } from "react";
import { Checkbox } from "../../components";

const nestedData = [
  {
    id: 1,
    label: "Parent 1",
    children: [
      {
        id: 2,
        label: "Child 1.1",
        children: [
          {
            id: 3,
            label: "Sub Child 1.1.1",
          },
          {
            id: 4,
            label: "Sub Child 1.1.2",
          },
        ],
      },
      {
        id: 5,
        label: "Child 1.2",
      },
    ],
  },
  {
    id: 6,
    label: "Parent 2",
    children: [
      {
        id: 7,
        label: "Child 2.1",
        children: [
          {
            id: 8,
            label: "Sub Child 2.1.1",
            children: [
              {
                id: 9,
                label: "Sub Child 2.1.1.1",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 10,
    label: "Parent 3",
    children: [
      {
        id: 11,
        label: "Child 3.1",
      },
      {
        id: 12,
        label: "Child 3.2",
      },
    ],
  },
  {
    id: 13,
    label: "Parent 4",
    children: [
      {
        id: 14,
        label: "Child 4.1",
        children: [
          {
            id: 15,
            label: "Sub Child 4.1.1",
          },
        ],
      },
    ],
  },
  {
    id: 16,
    label: "Parent 5",
    children: [
      {
        id: 17,
        label: "Child 5.1",
      },
      {
        id: 18,
        label: "Child 5.2",
      },
    ],
  },
];

const NestedCheckbox = () => {
  const [checked, setChecked] = useState({});

  const updateChildren = (item, newState, isChecked) => {
    item?.children?.forEach((element) => {
      console.log("element", element?.id);
      newState[element?.id] = isChecked;
      if (element?.children) updateChildren(element, newState, isChecked);
    });
  };

  const verifyChecked = (item, newState) => {
    if (!item?.children) return newState[item?.id] || false;

    const allChildrenChecked = item?.children?.every((child) =>
      verifyChecked(child, newState)
    );

    newState[item?.id] = allChildrenChecked;

    return allChildrenChecked;
  };

  const handleChange = (isChecked, item) => {
    setChecked((prev) => {
      const newState = { ...prev, [item?.id]: isChecked };

      // if children are present in the state
      updateChildren(item, newState, isChecked);

      nestedData.forEach((data) => verifyChecked(data, newState));

      return newState;
    });
  };

  return (
    <div className="m-4">
      <Checkbox
        data={nestedData}
        checked={checked}
        setChecked={setChecked}
        handleChange={handleChange}
      />
      {JSON.stringify(checked)}
    </div>
  );
};

export default NestedCheckbox;
