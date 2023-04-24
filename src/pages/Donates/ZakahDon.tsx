import { Col, Row } from 'antd';
import React from 'react';
import { Container } from 'react-bootstrap';
import './ZakahDon.css';

const ZekahDon = () => {
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
                                    <h1>Zakah</h1>
                                    <p>sRasulullah (s.a.w) said:
                                        Allah Ta’ala has made Sadaqa Fitr Wajib, in order to purify the faster from pointless, useless and foul words and to feed the poor and needy. Whoever gives their Sadaqa Fitr before Salat on Eid day, then that will be an accepted Fitra. However, if they give after the prayer on Eid day, then it would be counted as a normal donation.”</p>
                                    <p>Please click on PayPal link below to donate regularly or any amount with your debit or credit card below</p>
                                </div>
                                <a className='paypal' target='_blank' href='https://www.paypal.com/donate/?hosted_button_id=QTLMF9YQB55VN'>Donate Now</a>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default ZekahDon;