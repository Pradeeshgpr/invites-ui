import React from 'react';
import './home.css'
import Header from '../components/header';
import ReactCardSlider from "react-card-slider-component";
import { Container, Row } from 'react-bootstrap';
import DetailsSlider from '../components/details-slider';
import bg from './../assests/service-img.jpg'
import Footer from '../components/footer';
const areas = [{
    image: require('./../assests/service/highway-lighting.jpg'),
    title: 'Road lighting',
    description: 'Inavit Group provides comprehensive solutions in the field of Road lighting and its controls.',
    isShowReadMore: true
    },{
    image: require('./../assests/service/toll-plaza.jpg'),
    title: 'Toll Plaza',
    description: 'Inavit Group provides comprehensive MEP solutions for Toll plaza buildings and its tunnels across india.',
    isShowReadMore: true
    },{
    image: require('./../assests/service/tunnel-lighting.jpg'),
    title: 'Tunnel',
    description: 'Inavit Group has provided comprehensive MEP solutions for Road Tunnels across india and in Qatar.',
    isShowReadMore: true
    },{
    image: require('./../assests/service/metro-stations.jpg'),
    title: 'Metros',
    description: 'Inavit Group is proficient in providing detailed designing and integrated MEP packages Lighting, Electrical, LV Systems,',
    isShowReadMore: true
    },{
    image: require('./../assests/service/egis-geoplan-urban.jpg'),
    title: 'Urban Infrastructure',
    description: 'Inavit Group is proficient in providing Lighting & MEP Design and execution services in infrastructure projects',
    isShowReadMore: true
    }]

export default function home() {
    return (
        <>
            <Header/>
            <Container fluid={true} className='home-head-container'>
                <Row>
                    <Container style={{backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                        <Row className='justify justify-content-center' style={{marginTop: '10px'}}>
                            <div sm={12} className='text-center' style={{paddingTop: '20px'}}>
                                <h2 className="common-heading">Offering</h2>
                            </div>
                        </Row>
                        <Row>
                            <DetailsSlider/>
                        </Row>
                    </Container>
                </Row>
                <Row style={{height: '400px', marginTop: '20px'}}>
                    <h2 class="common-heading" style={{color: '#000'}}><span style={{fontWeight: 'lighter'}}>Key</span> Areas</h2>
                    <ReactCardSlider slides={areas}/>
                </Row>
                <Row style={{marginTop: '20px'}}>
                    <Footer/>
                </Row>
            </Container>
        </>
    )
}