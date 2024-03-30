import { createContext, useState } from "react";
import Axios from "axios";
import GridLayout from "./Components/grid";

export const mapContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState(" ");
  const [latitude, setLatitude] = useState(" ");
  const [longitude, setLongitude] = useState(" ");
  const [fetchResult, setFetchResult] = useState([]);

  const fetchIP = () => {
    Axios.get(`https://ipinfo.io/${inputValue}/json`).then((res) => {
      console.log(res.data);
      setInputValue(res.data.ip);
      const { loc } = res.data;
      const [latitude, longitude] = loc.split(",");
      setLatitude(latitude);
      setLongitude(longitude);
      setFetchResult(res.data);
    });
  };

  return (
    <mapContext.Provider
      value={{
        fetchIP,
        inputValue,
        setInputValue,
        fetchResult,
        latitude,
        longitude,
      }}
    >
      <div>
        <GridLayout />
      </div>
    </mapContext.Provider>
  );
}

export default App;
