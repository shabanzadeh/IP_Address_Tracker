import {useContext } from "react";
import { mapContext } from "../App";



const ButtunIP =()=>{
   
    const {setInputValue, fetchIP} = useContext(mapContext)
    
    return(
        
        
    <div className="buttun-map">
        <label htmlFor="ip"><h4>IP Address Tracker</h4></label>
        <input type="text" id="ip" placeholder="Search for any IP address or domain" className="btn" onChange={(event)=>{setInputValue(event.target.value)}}></input>
        <button onClick={fetchIP }>Add IP</button>
        
    </div>
   
   );

}
 
export default ButtunIP;