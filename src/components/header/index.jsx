import React from 'react';
import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import './header.css'
import logo from './../../assests/logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Header(props) {
    return (
        <nav className="navbar navbar-default sticky-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand">
                        <Container className="logo-container">
                            <Row>
                                <Col md={4} xs={5} sm = {5} lg={3}>
                                    <Link to='/'><Image src={logo}/></Link>
                                </Col>
                            </Row>
                        </Container>
                    </a>
                </div>
            </div>
        </nav>
        );
}

export default Header;