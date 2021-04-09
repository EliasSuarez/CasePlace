import React from "react"

function AccordionItem({mapPin, index, toggleCurrentPin}) {
    return (
        <div 
            className = {"mapPin" + (mapPin.open ? "open" : "")}
            key = {index}
            onClick = {() => toggleCurrentPin(index)}
        >
            <div className = "mapPin_name" style = {{fontWeight: "bold"}}>
                {mapPin.name}
            </div>

            <div className = "mapPin_info">
                {mapPin.info}
            </div>
        </div>
    )
}

export default AccordionItem