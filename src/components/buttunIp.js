import { useContext } from "react";
import { mapContext } from "../App";
const ButtunIP = () => {
  const { setInputValue, fetchIP } = useContext(mapContext);

  return (
    <div className="container bg-primary bg-opacity-75">
    <div className="row justify-content-center g-0">
      <div className="col-sm-12 col-md-4 col-lg-4">
      <label htmlFor="ip">
        <div className="d-flex mt-5 justify-context-center">
          <h4 >IP Address Tracker</h4>
        </div>  
      </label>
      </div>
      <div className="col-sm-12">
      <input
        type="text"
        id="ip"
        placeholder="Search for any IP address or domain"
        className="btn bg-light"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      ></input>
      <button onClick={fetchIP}>Add IP</button>
      
    </div>
    </div>
    </div>
  );
};

export default ButtunIP;
