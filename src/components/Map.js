import React, { useState, setState, Component}  from "react";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import places from './locations.json'
import GoogleMapReact from 'google-map-react';
const Map = () => {
    
    
  
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    var locations = places.map(data => {
      if(data.category == "CSE") 
        return (<AnyReactComponent
           lat = {data.latitude}
            lng = {data.longitude}
            text = {data.name} ></AnyReactComponent>)
    }
      )



      return (
        <div>
            <div>
        <input type="radio" value="Housing" name="gender" /> Housing
        <input type="radio" value="Food" name="gender" /> Food
        <input type="radio" value="Medical" name="gender" /> Medical
        <input type="radio" value="Phys" name="gender" /> Phys
        <input type="radio" value="Services" name="gender" /> Services
      </div>
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyBqiKidu6V4PTb8YZJdQET9qVjYTWFSG1o"}}
              defaultCenter={{lat:41.508186,lng:-81.608665}}
              defaultZoom={17}
            >
                  {locations}
            </GoogleMapReact>
          </div>
        </div>
      )
    }

export default Map;