"use client";
import "leaflet/dist/leaflet.css";
import React from "react";
import DraggableMarker from "./DraggableMarker/index";
import { MapContainer, TileLayer } from "react-leaflet";

export default () => {
  React.useEffect(() => {
    const L = require("leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "http://localhost:3000/Images/marker-icon.png",
      iconUrl: "",
      shadowUrl: "",
    });
  }, []);

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={17}
      style={{ height: "400px" }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <DraggableMarker />
    </MapContainer>
  );
};
