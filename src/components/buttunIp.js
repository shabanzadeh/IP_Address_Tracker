import { useContext } from "react";
import { mapContext } from "../App";
const ButtunIP = () => {
  const { setInputValue, fetchIP } = useContext(mapContext);

  return (
    <div className="container bg-primary bg-opacity-75">
      <div className="row justify-content-center g-0">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <label htmlFor="ip">
            <div className="d-flex mt-5 justify-context-center">
              <h4>IP Address Tracker</h4>
            </div>
          </label>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
          <input
            type="text"
            id="ip"
            placeholder="Search for any IP address"
            className="bg-light btn"
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          ></input>

          <button onClick={fetchIP} className="bg-light">Add IP</button>
        </div>
        <div />
      </div>
    </div>
  );
};

export default ButtunIP;
