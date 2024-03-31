import React, { useContext } from "react";
import { mapContext } from "../App";

const MapDetail = () => {
  const { fetchResult } = useContext(mapContext);

  return (
    <div className="row justify-content-center">
      <div className="col-sm-8 col-md-3">{fetchResult?.ip}</div>
      <div className=" col-sm-8 col-md-3">{fetchResult?.city}</div>
      <div className=" col-sm-8 col-md-3">{fetchResult?.region}</div>
      <div className="col-sm-8 col-md-3">{fetchResult?.timezone}</div>
    </div>
  );
};

export default MapDetail;
