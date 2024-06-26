
import Map from "./map";
import MapDetail from "./mapDetail";
import ButtunIP from "./buttunIp";


const GridLayout = () => {
  return (
    <>
    <div className="container">
      <div className="row g-0 bg-light pt-5 pb-5">
        <div className="col-sm-8 uben">
          <ButtunIP />
        </div>
        <div className="col-sm-8 mapDetail"> <MapDetail /> </div>
        <div className="map col-sm-8">
          <Map />
        </div>
      </div>
      </div>
    </>
  );
};

export default GridLayout;
