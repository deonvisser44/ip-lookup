import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React from "react";

import classes from "./MapComp.module.css";

function MapView(props) {
  const position = [props.lat, props.long];

  if (props.lat) {
    return (
      <MapContainer
        key={position}
        className={classes.mapComp}
        center={position}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    );
  } else {
    return (
      <div className={classes.noCoordsDiv}>
        <p>Coordinates for this IP address are unavailable</p>
      </div>
    )
  }
}

export default MapView;
