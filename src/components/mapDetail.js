import { useContext } from "react";
import { mapContext } from "../App";
const MapDetail = () => {
  const { inputValue, fetchResult } = useContext(mapContext);
  //const {city, timezone, region}= inputValue;
  return (
    <div className="row">
      <di className="col-3">{fetchResult?.ip}</di>
      <di className="col-3">{fetchResult?.city}</di>
      <di className="col-3">{fetchResult?.region}</di>
      <di className="col-3">{fetchResult?.timezone}</di>
    </div>
  );
};

export default MapDetail;
