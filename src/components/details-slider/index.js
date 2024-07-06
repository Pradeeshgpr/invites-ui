import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import React, { useState } from 'react';
import './details-slider.css'
import { Link } from "react-router-dom";



const silderDetails = [{
    header: "Engineering Design",
    content: "Any Engineering and Design project requires a deep understanding of the requirement and needs a close partnership with the client. Inavit partners through the entire cycle, from concept to commissioning - Inspection, Site Visit, Project Management & Coordination, Construction Management & Supervision, Commissioning Support, Pre-project activities, Basic & Detailed Design Engineering & Procurement Services.",
    isShowReadMore: true
},{
    header: "EPC",
    content: "A key pillar for 'New India' is its infrastructure from roads to dams to power plants to Urban development 'New India' will be built for the successes of tomorrow. Inavit infrastructure want to align with India’s growth vision. Inavit group leveraged its engineering strengths and project management process by extending item arm to EPC. ",
    isShowReadMore: true
},{
    header: "Project Management",
    content: "We provide professional project management services to a number of clients. We deliver value for money by providing the highest standards of project management, utilising our experienced project managers to realise business benefits and deliver projects to time, cost and quality.",
    isShowReadMore: true
},{
    header: "Products",
    content: "Coming Soon",
    isShowReadMore: false
}]

function DetailsSlider() {

    const [index, setIndex] = useState(0);

    const handleSelect = (indx) => {
        setIndex(indx);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
            {
                silderDetails.map((res, indx) => 
                    <Carousel.Item key={indx}>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    {/* <img style={{height: "500px",  marginLeft:"12%", width: "50%"}} src={res.image} alt="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="/> */}
                    <Carousel.Caption> 
                        <Container style={{marginTop: '0'}}>
                            <Row style={{justifyContent: "center"}}>
                                <Col sm={12} md={12} lg={7}>
                                    <h1>{res.header}</h1>
                                    <p>
                                    </p>
                                    <p>{res.content}
                                        </p>
                                        <span>
                                            {
                                            res.isShowReadMore && <Link to={`/offering?content=${res.header}`} style={{textDecoration: 'none', color: '#000'}}>
                                                <Button variant="light">Read More</Button>
                                            </Link>
                                        }</span>
                                    </Col>
                            </Row>
                        </Container>
                    </Carousel.Caption> 
                </Carousel.Item>
                )
            }
        </Carousel>
    );
}

export default DetailsSlider;