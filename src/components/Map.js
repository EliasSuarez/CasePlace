import React, { useState, setState, Component}  from "react";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import places from './locations.json'
import GoogleMapReact from 'google-map-react';

const Map = () => {
  
  var [loc, setLoc] = useState("CSE");


    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const locations = places.map(data => {
        return (<AnyReactComponent
           lat = {data.latitude}
            lng = {data.longitude}
            text = {data.name} ></AnyReactComponent>)
    }
      );

    const engineering = places.map(data => {
      if(data.category === "CSE") 
        return (<AnyReactComponent
            lat = {data.latitude}
            lng = {data.longitude}
            text = {data.name} ></AnyReactComponent>)
    }
      );
    
    const business = places.map(data => {
      if(data.category === "Business") 
        return (<AnyReactComponent
            lat = {data.latitude}
            lng = {data.longitude}
            text = {data.name} ></AnyReactComponent>)
    }
      );

    const arts = places.map(data => {
        if(data.category === "CAS") 
          return (<AnyReactComponent
              lat = {data.latitude}
              lng = {data.longitude}
              text = {data.name} ></AnyReactComponent>)
      }
        );

    const housing = places.map(data => {
      if(data.category === "Housing") 
        return (<AnyReactComponent
            lat = {data.latitude}
            lng = {data.longitude}
            text = {data.name} ></AnyReactComponent>)
    }
      );

    const food = places.map(data => {
      if(data.category === "Food") 
        return (<AnyReactComponent
            lat = {data.latitude}
            lng = {data.longitude}
            text = {data.name} ></AnyReactComponent>)
    }
      );

    const medical = places.map(data => {
      if(data.category === "Medical") 
        return (<AnyReactComponent
            lat = {data.latitude}
            lng = {data.longitude}
            text = {data.name} ></AnyReactComponent>)
    }
      );

      const phys = places.map(data => {
        if(data.category === "Phys") 
          return (<AnyReactComponent
             lat = {data.latitude}
              lng = {data.longitude}
              text = {data.name} ></AnyReactComponent>)
      }
        );

      const services = places.map(data => {
        if(data.category === "Services") 
          return (<AnyReactComponent
              lat = {data.latitude}
              lng = {data.longitude}
              text = {data.name} ></AnyReactComponent>)
      }
        );

        
          const radioHandle = (event) => {
            setLoc(event.target.value)
            console.log(loc)
          }

      return (
        <div>
        <div onChange={radioHandle}>
          <input type="radio" value="Housing" name = "select"/> Housing
          <input type="radio" value="Food" name = "select" /> Food
          <input type="radio" value="Medical" name = "select" /> Medical
          <input type="radio" value="Phys" name = "select"  /> Phys
          <input type="radio" value="Services" name = "select"  /> Services
          <input type="radio" value="Business"   name = "select"/> Business
          <input type="radio" value="CSE"   name = "select"/> Engineering
          <input type="radio" value="CAS"  name = "select"/> Arts and Sciences
        </div>
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyBqiKidu6V4PTb8YZJdQET9qVjYTWFSG1o"}}
              defaultCenter={{lat:41.508186,lng:-81.608665}}
              defaultZoom={17}
            >
              {console.log(loc)}
                  {loc ==="All" && (locations)}
                  {loc === "CSE" && (engineering)}
                  {loc === "Business" && (business)}
                  {loc === "CAS" && (arts)}
                  {loc === "Housing" && (housing)}
                  {loc === "Food" && (food)}
                  {loc === "Medical" && (medical)}
                  {loc === "Phys" && (phys)}
                  {loc === "Services" && (services)}
            </GoogleMapReact>
          </div>
        </div>
      )
    }

export default Map;