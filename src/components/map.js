import React, {  useEffect, useRef, useState } from "react";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Axios from "axios"






const Map = () => {
 
  const [ipNew, setIp] = useState("193.26.96.1")
    
  const mapRef = useRef(null);
  const [latitude, setLatitude ]= useState("48.4738");
  const [longitude,setLongitude]  = useState("7.9450");
    
    useEffect(()=>{
      fetchIP()
    }, []);
    const fetchIP = ()=>{
        Axios.get(`https://ipinfo.io/${ipNew}/json`).then((res)=>{
        console.log(res.data);

        const {loc} = res.data;
        console.log(loc);
        const [longitude, latitude] = loc.split(",");
        console.log(longitude);
        console.log(latitude);
        
        
         
        })
        
    }
    
    const handelClick=()=>{
      setIp(ipNew)
      setLatitude(latitude)
      setLongitude(longitude)

    }


  
    return ( 
            
        <><MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} style={{ width: '100%', height: '395px' }}>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />


      </MapContainer><div><button onClick={handelClick}> {ipNew}</button></div></>
        
    );
  };
  
  export default Map;

