import { Col, Row } from "react-bootstrap";
import { useContext } from "react"
import { mapContext } from "../App"
const MapDetail=()=>{
    const {inputValue, city, region, timezone} = useContext(mapContext);
    return(
        <Row>
        <Col  xl={2}>
            {inputValue}
        </Col>
        <Col xl={3}>
         {city}
        </Col>
        <Col xl={3}>
        {region}
        </Col>
        <Col xl={3} >
        {timezone}
        </Col>
        </Row>

    )
}

export default MapDetail