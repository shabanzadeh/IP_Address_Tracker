import React, { useContext } from "react";
import { mapContext } from "../App";

const MapDetail = () => {
  const { fetchResult } = useContext(mapContext);

  return (
    <div className="row">
      <div className="col-3 bg-success">{fetchResult?.ip}</div>
      <div className="col-3">{fetchResult?.city}</div>
      <div className="col-3">{fetchResult?.region}</div>
      <div className="col-3">{fetchResult?.timezone}</div>
    </div>
  );
};

export default MapDetail;
