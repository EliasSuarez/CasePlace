import React, { useEffect, useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ pins }) => {
  const [pinData, setPinData] = useState(pins);

  useEffect(() => {
    setPinData(pins);
  }, [pins]);

  const toggleCurrentPin = (pin) => {
    pins = pins.map((p) => {
      if (p.name === pin) {
        return {
          ...p,
          open: true,
        };
      } else {
        return {
          ...p,
          open: false,
        };
      }
    });
    setPinData(pins);
  };

  return (
    <div className="accordionItems">
      {pinData.map((pin) => {
        return (
          <AccordionItem
            mapPin={pin}
            key={pin.name}
            toggleCurrentPin={toggleCurrentPin}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
