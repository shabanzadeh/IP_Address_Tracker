
import { createContext, useState } from 'react';
import Axios from "axios";
import GridLayout from './Components/grid'


export const mapContext = createContext();


function App() {
  const [inputValue, setInputValue] = useState(" ")
  const [latitude, setLatitude ]= useState(" ");
  const [longitude,setLongitude]  = useState(" ");
  const [city, setCity] = useState("");
  const [timezone, setTimezone] = useState("");
  const [region, setRegion] = useState("");
  
  

  const fetchIP = ()=>{
    Axios.get(`https://ipinfo.io/${inputValue}/json`).then((res)=>{
    console.log(res.data);
    setInputValue(res.data.ip)
    const {city, loc, timezone, region} = res.data
    const [latitude, longitude] = loc.split(",");
    setLatitude(latitude);
    setLongitude(longitude);
    setCity(city)
    setRegion(region);
    setTimezone(timezone)
   
    
    
     
    })
    
}
  
  return (
    <mapContext.Provider value={{fetchIP, inputValue, setInputValue, longitude, latitude, city, region, timezone}}>
    
    <div >
     <GridLayout />
    </div>
    </mapContext.Provider>
   
  );
}

export default App;
