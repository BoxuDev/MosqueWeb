import { Col, Row } from 'antd';
import React from 'react';
import { Container } from 'react-bootstrap';
import './OtherDon.css';

const OtherDon = () => {
    return (
        <>
            <Container>
                <Container className="cont-another" style={{ marginBottom: "50px" }}>
                    <Row className="group" style={{ borderRadius: "20px", overflow: "hidden" }}>
                        <Col className="left">
                            <img src="https://static.wixstatic.com/media/9be301_4fbbe1d29083454bacb6de40e364226d~mv2.jpeg/v1/fill/w_490,h_406,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9be301_4fbbe1d29083454bacb6de40e364226d~mv2.jpeg" alt="" />
                        </Col>
                        <Col className="right">
                            <Container>
                                <div className='top-side'>
                                    <h1>Donate Us</h1>
                                    <p>Please click on PayPal link below to donate regularly or any amount with your debit or credit card below</p>
                                </div>
                                <div className='links'>
                                    <a className='don-link paypal' target='_blank' rel="noopener noreferrer" href='https://www.paypal.com/donate/?hosted_button_id=QTLMF9YQB55VN'>Donate Now</a>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default OtherDon;