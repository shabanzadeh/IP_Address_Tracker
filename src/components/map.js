import React, { useContext, useEffect, useRef } from "react";
import { mapContext } from "../App";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const { latitude,longitude, fetchIP } = useContext(mapContext);
  const mapRef = useRef(null);
  

  useEffect(() => {
    fetchIP();
  }, []);

  useEffect(() => {
    if (mapRef.current && latitude !== null && longitude !== null) {
      mapRef.current.setView([latitude, longitude], 13);
    }
  }, [latitude, longitude]);
 

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default Map;