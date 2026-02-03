import React from "react";

const Checkbox = ({ data, checked, setChecked, handleChange }) => {
  return (
    <div>
      {data?.map((item) => (
        <div key={item?.id}>
          <input
            type="checkbox"
            className="me-2 cursor-pointer"
            checked={checked[item?.id] || false}
            onChange={(e) => handleChange(e.target.checked, item)}
          />
          <label>{item?.label}</label>

          {item?.children && (
            <div className="mx-3">
              <Checkbox
                data={item?.children}
                checked={checked}
                setChecked={setChecked}
                handleChange={handleChange}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
