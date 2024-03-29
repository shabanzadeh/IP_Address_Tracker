
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from './map';
import MapDetail from './mapDetail';
import ButtunIP from './buttunIp';



const GridLayout=()=> {
 
  
  return (
  
    <Container fluid>
         <Row className='container'>
        < Col className='uben' >  
        <ButtunIP /> 
        </Col>
          <Col className='mapDetail'>
          <MapDetail />
          </Col>
        <Col className='map'>
        <Map />
        </Col>
        </Row>

      
    </Container>
   
  );
};

export default GridLayout;