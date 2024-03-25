
import { useContext } from "react"
import { mapContext } from "../App"
const MapDetail=()=>{
    const {inputValue, fetchResult} = useContext(mapContext);
    //const {city, timezone, region}= inputValue;
    return(
        <div className="col-3">
            {fetchResult?.ip}
            {fetchResult?.city}
            {fetchResult?.region}
            {fetchResult?.timezone}
       
        </div>

    )
}

export default MapDetail