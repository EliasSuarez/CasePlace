import React from "react";

const customRadioButton = ({ inValue, inName, inSetLoc }) => {
  const radioHandle = (event) => {
    inSetLoc(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          onChange={radioHandle}
          value={inValue}
          name={inName}
        />{" "}
        {inName}
        <span>inValue</span>
      </label>
      <label htmlFor={inValue}>
        <span>{inValue}</span>
      </label>
    </div>
  );
};

export default customRadioButton;
