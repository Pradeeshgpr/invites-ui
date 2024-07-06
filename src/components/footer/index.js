import { Col, Container, Row } from 'react-bootstrap';
import './footer.css'
import React from 'react';


export default function Footer() {
    return <div className='footer'>
        <Container style={{marginLeft: '5px'}}>
            <Row>
                <Col lg={7} md={12}>
                    <Container>
                        <Row>
                            <Col sm={12} md={2}>
                                <h5>Phone:</h5> <a href="tel:9731302645">+91 97313 02645</a>
                            </Col>
                            <Col sm={12} md={7}>
                                <h5>Address:</h5>
                                INAVIT Infrastructure Private Limited.<br/>#91 Spring Board, 4th Floor, Salarpuria Tower-1,<br/>
                                No-22, Industrial layout, Hosur Road, Koramangala,<br/>
                                Bangalore 560 095, Karnataka, India 
                            </Col>
                            <Col sm={12} md={2}>
                                <h5>Email:</h5>
                                <a href="mailto:prabu@inavitgroup.com">prabu@inavitgroup.com</a><br/>
                                <a href="mailto:info@inavitgroup.com">info@inavitgroup.com</a>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col lg={5} md={12}>
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col>
                             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.156783321236!2d77.62563513718956!3d12.93731155405334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14696f960ce9%3A0xfa7af475eaad7b4d!2sBengaluru%2C%20Karnataka%20560095!5e0!3m2!1sen!2sin!4v1581404790206!5m2!1sen!2sin" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
                            </Col>
                        </Row>
                    </Container>
                    
                </Col>
            </Row>
        </Container>
    </div>
}