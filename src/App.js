import logo from './logo.svg';
import {Ionicons} from "react-icons/io"
import GoogleMapReact from 'google-map-react';
import React, { useState, setState, Component} from 'react';
import './App.css';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import places from './places.json'

function App() {
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
    <ToggleButtonGroup type="checkbox" value={value} exclusive onChange={handleChange}>
      <ToggleButton value={1}>Explore</ToggleButton>
      <ToggleButton value={2}>Food</ToggleButton>
      <ToggleButton value={3}>Directions</ToggleButton>
      <ToggleButton value={4}>Transport</ToggleButton>
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
    
  );
}

export default App;
