import { Row, Col } from 'antd';
import React from 'react';
import { Container } from 'react-bootstrap';
import b1 from '../assets/Buthcer/Butcher (1).webp';
import b2 from '../assets/Buthcer/Butcher (2).webp';
import b3 from '../assets/Buthcer/Butcher (3).webp';
import b4 from '../assets/Buthcer/Butcher (4).webp';
import b5 from '../assets/Buthcer/Butcher (5).webp';
import '../styles/HelalFood.css';

const HelalFood = () => {
    return (
        <>
            <Container>
                <Container className="cont-another" style={{ marginBottom: "50px" }}>
                    <Row className="group" style={{ borderRadius: "20px", overflow: "hidden" }}>
                        <Col className="left">
                            <img src={b2} />
                        </Col>
                        <Col className="right">
                            <Container>
                                <Row>
                                    <Col className="title">
                                        <Container>
                                            <span style={{
                                                fontSize: "48px",
                                                color: "white"
                                            }}>Akdeniz Toros Butchers
                                            </span>
                                        </Container>
                                    </Col>
                                </Row>
                                <Row>
                                    <div style={{
                                        color: "white",
                                        marginTop: "18px"
                                    }}>
                                        <p>Mosque has its own Butchers available 7 days from 09:00 till 19:00. Access from Laburnum Street, Ground Floor. </p>
                                        <p>All our products not just stamped halal, but guaranteed halal via our own cuts.</p>
                                        <p>You can also order some products online..</p>
                                        <br />
                                        <h3 >torosdublin@gmail.com</h3>
                                        <span style={{
                                            color: "white",
                                            fontSize: "20px",
                                            fontFamily: "reklamescriptw00-medium,cursive",
                                            marginBottom: "10px"
                                        }}>+353 (87) 406 6894</span>
                                        <br /><br />
                                    </div>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container style={{ marginBottom: "30px" }}>
                <div className="container" style={{ boxShadow: "0 1px 20px 0 gray, 0 1px 20px 0 #136833" }}>
                    <section className="row tm-section">
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
                            <div className="tm-flex-center ">
                                <img src={b1} style={{ objectFit: "fill" }} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div className="tm-flex-center p-5" style={{ textAlign: "justify" }}>
                                <h1>Fresh Lamb Products</h1>
                                <p>All our products not just stamped halal, but guaranteed halal via our own cuts.</p>
                            </div>
                        </div>
                    </section>
                    <section className="row tm-section tm-col-md-reverse">
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div className="tm-flex-center p-5">
                                <div className="tm-md-flex-center" style={{ textAlign: "justify" }}>
                                    <p>All chicken products comes frozen from our supplier Tuna Foods located in Germany and served frozen to our customers</p>
                                    <h1>Why Tuna Foods?</h1>
                                    <p>Our halal and natural taste are our basic values that we offer to our consumers. We produce and offer them to our consumers in accordance with these values.
                                        We work with great care in all steps from raw material quality to hygiene, from naturalness to taste.
                                        We are delighted to bring healthy, natural and halal flavors away from glutamate and other harmful additives to our consumers. We are looking for new and fast ways to offer our consumers healthy, halal and natural products with our growing production and sales network.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
                            <div className="tm-flex-center p-5 tm-bg-color-primary">
                                <div className="tm-max-w-400 tm-flex-center tm-flex-col">
                                    <img src={b5} />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="row tm-section">
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
                            <div className="tm-flex-center p-5 tm-bg-color-primary tm-section-min-h">
                                <img src={b4}/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div className="tm-flex-center p-5" style={{ textAlign: "justify" }}>
                                <h1>Why Should I Choose Tuna Food?</h1>
                                <p>Because, Halal and Naturalness we offer to our customers are our essential values distinguish us from other producers. We attach great importance to hygiene and naturalness in all of our production stages. We are delighted to bring healthy, natural and halal flavours away from Monosodium Glutamate and other harmful additives to our consumers.</p>
                                <h1>What is Dry Plucking?</h1>
                                <p>Dry Plucking is the process of removing the feathers of a chicken slaughtered according to Islamic methods without using a scalding boiler, medicated and high temperature water. There is no bacteria, dust and impurities in chickens that are applied dry-plucking process. Therefore, a cleaner, hygienic and healthy product is offered to consumers.</p>
                            </div>
                        </div>
                    </section>
                    <section className="row tm-section tm-col-md-reverse">
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div className="tm-flex-center p-5">
                                <div className="tm-md-flex-center">
                                    <h1>Variety of Breakfast products all you need for breakfast..</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
                            <div className="tm-flex-center p-5 tm-bg-color-primary">
                                <div className="tm-max-w-400 tm-flex-center tm-flex-col">
                                    <img src={b3}/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Container>
        </>
    );
}

export default HelalFood;