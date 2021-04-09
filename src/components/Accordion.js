import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ pins }) => {
  const [pinData, setPinData] = useState(pins);

  //method to open the accordion item to see its info if it is clicked

  const toggleCurrentPin = (index) => {
    setPinData(
      pinData.map((pin, i) => {
        if (i === index) {
          pin.open = !pin.open;
        } else {
          pin.open = false;
        }
        return pin;
      })
    );
  };

  return (
    <div className="accordionItems">
      {pins.map((pin, i) => (
        <AccordionItem
          mapPin={pin}
          index={i}
          toggleCurrentPin={toggleCurrentPin}
        />
      ))}
    </div>
  );
};

export default Accordion;
