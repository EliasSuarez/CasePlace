import React from "react";
import places from "./locations.json";
import GoogleMapReact from "google-map-react";
import * as ButtonTitle from "../util/ButtonTitles.js";
import Accordion from "./Accordion";
import "../styles/Radio.scss";
import { FastFood, Pin, Bandage, Home, Barbell, School, BagHandle, Car, Bus } from 'react-ionicons'

const Map = ({ loc, setLoc }) => {
  const cwruBlue = "#0A304E";
  // #TODO: Clean up this file
  // #TODO: Change up categories - Discuss with group
  
  //const AnyReactComponent = ({ text }) => <PinOutline
 // ></PinOutline>;
  const directory = places.map((data) => {
    //category - Directory
    if ((data.category === ButtonTitle.CampusSeeking) && data.deptMarker === "")
      return (
        <Pin
          lat={data.latitude}
          lng={data.longitude}
          color={cwruBlue} 
          height="25px"
          width="25px"
        />
      );
      if ((data.category === ButtonTitle.CampusSeeking) && data.deptMarker === "housing")
      return (
        <Home
          lat={data.latitude}
          lng={data.longitude}
          color= {cwruBlue}
          height="25px"
          width="25px"
        />
      );
      if ((data.category === ButtonTitle.CampusSeeking) && data.deptMarker === "CAS")
      return (
        <School
          lat={data.latitude}
          lng={data.longitude}
          color={'green'} 
          height="25px"
          width="25px"
        />
      );
      if ((data.category === ButtonTitle.CampusSeeking) && data.deptMarker === "CSE")
      return (
        <School
          lat={data.latitude}
          lng={data.longitude}
          color={'red'} 
          height="25px"
          width="25px"
        />
      );
      if ((data.category === ButtonTitle.CampusSeeking) && data.deptMarker === "phed")
      return (
        <Barbell
          lat={data.latitude}
          lng={data.longitude}
          color={cwruBlue} 
          height="25px"
          width="25px"
        />
      );
      if ((data.category === ButtonTitle.CampusSeeking) && data.deptMarker === "health")
      return (
        <Bandage
          lat={data.latitude}
          lng={data.longitude}
          color={cwruBlue} 
          height="25px"
          width="25px"
        />
      );
      if ((data.category === ButtonTitle.CampusSeeking) && data.deptMarker === "business")
      return (
        <School
          lat={data.latitude}
          lng={data.longitude}
          color={cwruBlue} 
          height="25px"
          width="25px"
        />
      );
  });

  const food = places.map((data) => {
    if (data.category === ButtonTitle.FoodSeeking)
      return (
        <FastFood
          lat={data.latitude}
          lng={data.longitude}
          color={cwruBlue} 
          height="25px"
          width="25px"
        />
      );
  });

  const studentServices = places.map((data) => {
    if (data.category === ButtonTitle.StudentServicesSeeking)
      return (
        <School
          lat={data.latitude}
          lng={data.longitude}
          color={cwruBlue} 
          height="25px"
          width="25px"
        />
      );
  });

  const healthServices = places.map((data) => {
    if (data.category === ButtonTitle.HealthServicesSeeking)
      return (
        <Bandage
        lat={data.latitude}
        lng={data.longitude}
        color={cwruBlue} 
        height="25px"
        width="25px"
      />
      );
  });

  const transportation = places.map((data) => {
    if (data.category === ButtonTitle.TransportationSeeking)
      return (
        <Bus
        lat={data.latitude}
        lng={data.longitude}
        color={cwruBlue} 
        height="25px"
        width="25px"
      />
      );
  });

  const radioHandle = (event) => {
    setLoc(event.target.value);
    // #TODO: Use this to set initial radio button???
  };

  return (
    <div>
      <div className="radioDiv" onChange={radioHandle} >
        {/* #TODO: Connect the rest of these buttons */}
        {/*Category Directory*/}
        <input className="button" type="radio" value={ButtonTitle.CampusSeeking} name="select" /> <text className="radios"> Directory  </text>
        {/*Category: Food*/}
        <input type="radio" value={ButtonTitle.FoodSeeking} name="select" /> <text className="radios"> Food  </text>
        {/*Category Student Services*/}
        <input type="radio" value={ButtonTitle.StudentServicesSeeking} name="select"/>  <text className="radios"> Student Services </text>
        {/*Category Health Services*/}
        <input type="radio" value={ButtonTitle.HealthServicesSeeking} name="select"/> <text className="radios">Health Services</text>
        {/*Category Transportation*/}
        <input type="radio" value={ButtonTitle.TransportationSeeking} name="select" /> <text className="radios">Transportation</text>
        {/*Add a button for Category Research  */}
      </div>
      <div style={{ height: "100vh", width: "100%" }}>
        {/*#TODO: Hide API key*/}
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBqiKidu6V4PTb8YZJdQET9qVjYTWFSG1o" }}
          defaultCenter={{ lat: 41.508186, lng: -81.608665 }}
          defaultZoom={17}
        >
          {loc === ButtonTitle.CampusSeeking && directory}
          {loc === ButtonTitle.FoodSeeking && food}
          {loc === ButtonTitle.StudentServicesSeeking && studentServices}
          {loc === ButtonTitle.HealthServicesSeeking && healthServices}
          {loc === ButtonTitle.TransportationSeeking && transportation}
        </GoogleMapReact>
        <Accordion pins={places?.filter((x) => x.category === loc)} />
      </div>
    </div>
  );
};

export default Map;
