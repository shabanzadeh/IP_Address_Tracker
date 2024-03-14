import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from './map'

import ButtunIp from './buttunIp';



const GridLayout=()=> {
  return (
    <Container fluid>
        
      <Row className='container'>
        <Col className='uben' xs={6}>  
        <ButtunIp />  
        </Col>
        <Col className='map'>
        <div>
        <Map />
        </div>    
        </Col>
        
        </Row>
       
       
        
      
      
    </Container>
  );
}

export default GridLayout;