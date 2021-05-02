import React from "react";
import places from "./locations.json";
import GoogleMapReact from "google-map-react";
import * as ButtonTitle from "../util/ButtonTitles.js";
import Accordion from "./Accordion";

const Map = ({ loc, setLoc }) => {
  const cwruBlue = "#0A304E";
  // #TODO: Clean up this file
  // #TODO: Change up categories - Discuss with group

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const directory = places.map((data) => {
    //category - Directory
    if (data.category === ButtonTitle.CampusSeeking)
      return (
        <AnyReactComponent
          lat={data.latitude}
          lng={data.longitude}
          text={data.name}
        />
      );
  });

  const food = places.map((data) => {
    if (data.category === ButtonTitle.FoodSeeking)
      return (
        <AnyReactComponent
          lat={data.latitude}
          lng={data.longitude}
          text={data.name}
        />
      );
  });

  const studentServices = places.map((data) => {
    if (data.category === ButtonTitle.StudentServicesSeeking)
      return (
        <AnyReactComponent
          lat={data.latitude}
          lng={data.longitude}
          text={data.name}
        />
      );
  });

  const healthServices = places.map((data) => {
    if (data.category === ButtonTitle.HealthServicesSeeking)
      return (
          <AnyReactComponent
              lat={data.latitude}
              lng={data.longitude}
              text={data.name}
          />
      );
  });

  const transportation = places.map((data) => {
    if (data.category === ButtonTitle.TransportationSeeking)
      return (
          <AnyReactComponent
              lat={data.latitude}
              lng={data.longitude}
              text={data.name}
          />
      );
  });

  const radioHandle = (event) => {
    setLoc(event.target.value);
    // #TODO: Use this to set initial radio button???
  };

  return (
    <div>
      <div onChange={radioHandle}>
        {/* #TODO: Connect the rest of these buttons */}
        {/*Category Directory*/}
        <input type="radio" value={ButtonTitle.CampusSeeking} name="select" /> Directory
        {/*Category: Food*/}
        <input type="radio" value={ButtonTitle.FoodSeeking} name="select" /> Food
        {/*Category Student Services*/}
        <input type="radio" value={ButtonTitle.StudentServicesSeeking} name="select" /> Student Services
        {/*Category Health Services*/}
        <input type="radio" value={ButtonTitle.HealthServicesSeeking} name="select" /> Health Services
        {/*Add a button for Category Research  */}
        <input type="radio" value={ButtonTitle.TransportationSeeking} name="select" /> Transportation
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
