
import Map from "./map";
import MapDetail from "./mapDetail";
import ButtunIP from "./buttunIp";


const GridLayout = () => {
  return (
    <>
    <div className="container">
      <div className="row g-0 bg-light pt-5 pb-5">
        <div className="uben col-sm-8">
          <ButtunIP />
        </div>
        <div className="map col-sm-8">
          <Map />
        </div>
      </div>
      </div>
    </>
  );
};

export default GridLayout;
