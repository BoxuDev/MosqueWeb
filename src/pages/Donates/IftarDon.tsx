import { Col, Row } from 'antd';
import React from 'react';
import { Container } from 'react-bootstrap';
import './ZakahDon.css';

const IftarDon = () => {
    return (
        <>
            <Container>
                <Container className="cont-another" style={{ marginBottom: "50px" }}>
                    <Row className="group" style={{ borderRadius: "20px", overflow: "hidden" }}>
                        <Col className="left">
                            <img src="https://static.wixstatic.com/media/9be301_4fbbe1d29083454bacb6de40e364226d~mv2.jpeg/v1/fill/w_490,h_406,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9be301_4fbbe1d29083454bacb6de40e364226d~mv2.jpeg" alt='iftar' />
                        </Col>
                        <Col className="right">
                            <Container>
                                <div className='top-side' style={{ marginBottom: "20px" }}>
                                    <h1>IFTAR</h1>
                                    <p>The Prophet (saw) said, ‘Whoever feeds a person breaking his fast will earn the same reward as him, without anything being lessened from the reward of the fasting person’. [Tirmidhi]</p>
                                    <p>Please click on PayPal link below to donate regularly or any amount with your debit or credit card below</p>
                                </div>
                                <div className='list'>
                                    <a className='zekah-gc-link' target='_blank' rel="noreferrer" href='https://www.paypal.com/donate/?hosted_button_id=GVBX2CFU6URTJ'>50 €</a>
                                    <a className='zekah-gc-link' target='_blank' rel="noreferrer" href='https://www.paypal.com/donate/?hosted_button_id=EVDQVU55C2RYQ'>100 €</a>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default IftarDon;