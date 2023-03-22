import { Col, Row } from 'antd';
import React from 'react';
import { Container } from 'react-bootstrap';
import './ZekahDon.css';

const CharityDon = () => {
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
                                    <h1>Charity</h1>
                                    <p>Sadaqa is charity given voluntarily in order to please God. Sadaqa also describes a voluntary charitable act towards others, whether through generosity, love, compassion or faith. These acts are not necessarily physical or monetary. Simple good deeds such as a smile, or a helping hand, are seen as acts of sadaqa.</p>
                                </div>
                                <div className='list'>
                                    <a className='zekah-gc-link' target='_blank' href='https://pay.gocardless.com/AL0005N66KJJM0'>5 -€ (Subscribe)</a>
                                    <a className='zekah-gc-link' target='_blank' href='https://pay.gocardless.com/AL0005N66PKB1Z'>10-€ (Subscribe)</a>
                                    <a className='zekah-gc-link' target='_blank' href='https://pay.gocardless.com/AL0005N66R0Q2T'>20-€ (Subscribe)</a>
                                    <a className='zekah-gc-link' target='_blank' href='https://pay.gocardless.com/AL0005N66TJJDD'>30-€ (Subscribe)</a>
                                    <a className='zekah-gc-link' target='_blank' href='https://pay.gocardless.com/AL0005N66Y6MXD'>50-€ (Subscribe)</a>
                                </div>
                                <a className='paypal' target='_blank' href='https://www.paypal.com/donate/?hosted_button_id=G9CAQRRMGDQGN'>Paypal</a>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default CharityDon;