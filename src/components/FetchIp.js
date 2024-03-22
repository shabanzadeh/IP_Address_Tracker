import Axios from "axios";
import {useContext,useState} from "react";
import { InputContext } from "./Grid";
const FetchIP = ()=>{
    const {inputValue} = useContext(InputContext)
    const [ipMap, setIpMap] = useState("")
    Axios.get(`https://ipinfo.io/${inputValue}/json`).then((res)=>{
    console.log(res.data);
    setIpMap(res.data)
    const {loc} = res.data;
    const [longitude, latitude] = loc.split(",");
    
     
    })
    
}

export default FetchIP;