import Axios from "axios";
import React, { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"
const url = "https://leafletjs.com/"

const Map = () => {
    const mapRef = useRef(null);
    const latitude = 51.08342;
    const longitude = 10.423447;
  
    return ( 
        
      
      
        <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} style={{width:'100%', height:'395px'}}>

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
         
         
        </MapContainer>
        
    );
  };
  
  export default Map;

