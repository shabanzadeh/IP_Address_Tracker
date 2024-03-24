
import { createContext, useState } from 'react';
import Axios from "axios";
import GridLayout from './Components/grid'


export const mapContext = createContext();


function App() {
  const [inputValue, setInputValue] = useState(" ")
  const [latitude, setLatitude ]= useState(" ");
  const [longitude,setLongitude]  = useState(" ");
  
  

  const fetchIP = ()=>{
    Axios.get(`https://ipinfo.io/${inputValue}/json`).then((res)=>{
    console.log(res.data);
    setInputValue(res.data.ip)
    const {loc} = res.data;
    console.log(loc);
    const [latitude, longitude] = loc.split(",");
    setLatitude(latitude);
    setLongitude(longitude)
    
     
    })
    
}
  
  return (
    <mapContext.Provider value={{fetchIP, inputValue, setInputValue, longitude, latitude}}>
    
    <div >
     <GridLayout />
    </div>
    </mapContext.Provider>
   
  );
}

export default App;
