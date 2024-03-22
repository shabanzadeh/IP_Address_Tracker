import React, {useContext,useEffect, useRef } from "react";
import { mapContext } from "../App";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";




const Map = () => {

  const {longitude, latitude, fetchIP} = useContext(mapContext);
  
    
  const mapRef = useRef(null);
 
    
    useEffect(()=>{
      fetchIP()
    }, []);
   

  
    return ( 
            
        <><MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} style={{ width: '100%', height: '395px' }}>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />


      </MapContainer></>
      
        
    );
  };
  
  export default Map;

