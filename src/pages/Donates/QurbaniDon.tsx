import { Col, Row } from 'antd';
import React from 'react';
import { Container } from 'react-bootstrap';
import './ZakahDon.css';

const QurbaniDon = () => {
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
                                <div className='top-side' style={{ marginBottom: "20px" }}>
                                    <h1>QURBANI</h1>
                                    <p>Means sacrifice. Every year during the Islamic month of Dhul Hijjah, Muslims around the world slaughter an animal – a goat, sheep, cow or camel – to reflect the Prophet Ibrahim's willingness to sacrifice his son Ismail, for the sake of God.</p>
                                    <p>Please click on PayPal link below to donate regularly or any amount with your debit or credit card below</p>

                                </div>
                                
                                <div className='list'>
                                    <a className='zekah-gc-link' target='_blank' rel="noreferrer" href='https://www.paypal.com/donate/?hosted_button_id=K6XANNTN9PWYA' style={{}}>Vajib Qurbani <br/> 130 €</a>
                                    <a className='zekah-gc-link' target='_blank' rel="noreferrer" href='https://www.paypal.com/donate/?hosted_button_id=66NPL6A3EM4F8' style={{minWidth: "140px"}}>Nafilah Qurbani <br/>  140 €</a>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default QurbaniDon;