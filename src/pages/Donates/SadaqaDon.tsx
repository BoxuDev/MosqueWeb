import { Col, Row } from 'antd';
import React from 'react';
import { Container } from 'react-bootstrap';
import './ZakahDon.css';

const SadaqaDon = () => {
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
                                    <h1>Sadaqa</h1>
                                    <p>Sadaqa is charity given voluntarily in order to please God. Sadaqa also describes a voluntary charitable act towards others, whether through generosity, love, compassion or faith. These acts are not necessarily physical or monetary. Simple good deeds such as a smile, or a helping hand, are seen as acts of sadaqa.</p>
                                    <p>Please click on PayPal link below to donate regularly or any amount with your debit or credit card below</p>
                                </div>
                                <div className='list'>
                                    <a className='zekah-gc-link' target='_blank' href='https://www.paypal.com/donate/?hosted_button_id=59VYZZXVA3Z5E'>5  €</a>
                                    <a className='zekah-gc-link' target='_blank' href='https://www.paypal.com/donate/?hosted_button_id=PPUWTHJF9YXGW'>10 €</a>
                                    <a className='zekah-gc-link' target='_blank' href='https://www.paypal.com/donate/?hosted_button_id=3XYZLR2BNDYFN'>20 €</a>
                                    <a className='zekah-gc-link' target='_blank' href='https://www.paypal.com/donate/?hosted_button_id=2WKEBQV9EYS94'>30 €</a>
                                    <a className='zekah-gc-link' target='_blank' href='https://www.paypal.com/donate/?hosted_button_id=EW5GJKGVU7ECA'>50 €</a>
                                </div>
                                <a className='paypal' target='_blank' href='https://www.paypal.com/donate/?hosted_button_id=QTLMF9YQB55VN'>Paypal</a>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default SadaqaDon;