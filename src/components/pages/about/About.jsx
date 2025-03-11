 import { Container,Row,Col,Button } from "react-bootstrap";

// import SectionHeader from "./Header/SectionHeader"
import aboutimg from "../../image/about.jpg"
import Card from 'react-bootstrap/Card';

const About = () => {
  return (
    <>
    <Container>
      <div></div>
      <Row>
      <Col>
      <img src={aboutimg} ></img>   
      </Col>  
          <Col>
            <Card>     
              <Card.Body>
                <Card.Title>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</Card.Title>
                <Card.Text>
                Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
                </Card.Text>    
                
            <Button variant="primary">ReadMore</Button>
          
              </Card.Body>
            </Card>
        </Col>    
      </Row>
    </Container>
     
    </>
    
  )
}

export default About;