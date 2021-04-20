import React from "react";

const AccordionItem = ({ mapPin, toggleCurrentPin }) => {
  return (
    <div
      className={"mapPin" + (mapPin.open ? "open" : "")}
      onClick={() => toggleCurrentPin(mapPin.name)}
    >
      <div className="mapPin_name" style={{ fontWeight: "bold" }}>
        {mapPin.name}
      </div>
      <div className="mapPin_info">{mapPin.info}</div>
    </div>
  );
};

export default AccordionItem;
