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
                                    <h1>Donate</h1>
                                    <p>Rasulullah (s.a.w) said:
                                        Allah Ta’ala has made Sadaqa Fitr Wajib, in order to purify the faster from pointless, useless and foul words and to feed the poor and needy. Whoever gives their Sadaqa Fitr before Salat on Eid day, then that will be an accepted Fitra. However, if they give after the prayer on Eid day, then it would be counted as a normal donation.”</p>
                                </div>
                                <div className='links'>
                                    <a className='don-link' target='_blank' href='https://pay.gocardless.com/AL0005N66KJJM0'>5  - € ( Subscribe )</a>
                                    <a className='don-link' target='_blank' href='https://pay.gocardless.com/AL0005N66PKB1Z'>10 - € ( Subscribe )</a>
                                    <a className='don-link' target='_blank' href='https://pay.gocardless.com/AL0005N66R0Q2T'>20 - € ( Subscribe )</a>
                                    <a className='don-link' target='_blank' href='https://pay.gocardless.com/AL0005N66TJJDD'>30 - € ( Subscribe )</a>
                                    <a className='don-link' target='_blank' href='https://pay.gocardless.com/AL0005N66Y6MXD'>50 - € ( Subscribe )</a>
                                    <a className='don-link paypal' target='_blank' href='https://www.paypal.com/donate/?hosted_button_id=G9CAQRRMGDQGN'>Paypal</a>
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