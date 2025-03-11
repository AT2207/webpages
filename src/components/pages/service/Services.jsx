import { Container,Row,Col } from "react-bootstrap";
import SectionHeader from "../../Header/SectionHeader";
//import ServiceCard from "./card/ServiceCard";
import ServiceCard from "../service/card/ServiceCard"


import { FiActivity } from "react-icons/fi";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { BsBroadcast } from "react-icons/bs";

const Services = () => {
  const data = [
    {
      title:"Lorem Ipsum",
      description:"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
      icon: FiActivity
    },{
      title:"Sed ut perspici",
      description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
      icon: BsBoundingBoxCircles
    },{
      title:"Magni Dolores",
      description:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
      icon: IoCalendarOutline
    },{
      title:"Nemo Enim",
      description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      icon:BsBroadcast
    }
  ]
  return (
    <Container>
        <SectionHeader title="Services" description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"/>


        <Row xs="1" md={2} lg="4">
        
          {
            data.map((item,index)=>{
              return(
                <Col key={index} style={{paddingTop:"30px"}}>
                  <ServiceCard 
                  title={item.title}
                  description={item.description}
                  Icon={item.icon}
                  /> 
                </Col>
              )
            })
          }
        </Row>
    </Container>
  )
}

export default Services