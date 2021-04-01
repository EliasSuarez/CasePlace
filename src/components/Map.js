import React, { useState, setState, Component}  from "react";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import places from './locations.json'
import GoogleMapReact from 'google-map-react';
const Map = () => {
    
    const [value, setValue] = useState(1);
    const handleChange = (val) => setValue(val);
  
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const locations = places.map(data =>
        <AnyReactComponent
           lat = {data.latitude}
            lng = {data.longitude}
            text = {data.name} ></AnyReactComponent>
      )

      return (
        <div>
        <ToggleButtonGroup type = "checkbox" exclusive>
            <ToggleButton value = "Explore">Explore</ToggleButton>
            <ToggleButton value = "Transportation">Transportation</ToggleButton>
            <ToggleButton value = "Directions">Directions</ToggleButton>
            <ToggleButton value = "Food">Food</ToggleButton>
        </ToggleButtonGroup>
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyBqiKidu6V4PTb8YZJdQET9qVjYTWFSG1o"}}
              defaultCenter={{lat:41.508186,lng:-81.608665}}
              defaultZoom={17}
            >
                <AnyReactComponent
             lat = {places[1].latitude}
              lng = {places[1].longitude}
              text = {places[1].name} ></AnyReactComponent>
                  {locations}
            </GoogleMapReact>
          </div>
        </div>
      )
    }

export default Map;