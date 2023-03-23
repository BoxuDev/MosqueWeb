import { Col, Row } from 'antd';
import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Education.css';
import rahle from  '../assets/Files/rahle.jpg';

const Education = () => {
    return (
        <>
            <section>
                <Container>
                    <Container className="cont-another" style={{ marginBottom: "50px" }}>
                        <Row className="group" style={{ borderRadius: "20px", overflow: "hidden" }}>
                            <Col className="left">
                                <img src={rahle} />
                            </Col>
                            <Col className="right">
                                <Container>
                                    <div style={{ color: "white", textAlign: "justify" }}>
                                        <h1>Children's Education</h1>
                                        <p>We have classes for both boys and girls from age 5 till 16 years old. </p>
                                        <p>Classes are from 16:30 - 18:30 Monday to Friday. Saturday from 10:00 - 14:00</p>
                                        <p>Lessons are from 10:00 to 14:00 during school term holidays. </p>
                                        <p>For more details please speak to the imam on +353 (87) 406 6894.</p>
                                        <button className="eduMoreButton"><a href="http://marathonschool.com/" className='linkMoreB'>Learn More</a></button>
                                    </div>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </section>
            <section>
                <Container>
                    <Container className='cont-another' style={{}}>
                        <div style={{ paddingLeft: "24px", paddingRight: "24px", color: "white" }}>
                            <Row style={{ marginBottom: "24px" }}>
                                <h1>Madrasah 2022/23</h1>
                            </Row>
                            <Row style={{ display: "flex", textAlign: "justify" }} gutter={[64, 0]}>
                                <Col xl={6} lg={6} sm={24} xs={24} style={{ border: "1px solid white", padding: "18px", minWidth: "256px" }}>
                                    <h1>Learn How To Read Quran</h1>
                                    <br /><br />
                                    We teach people of all ages, with our specialised method, how to read the Quran in 2 weeks.</Col>
                                <Col xl={6} lg={6} sm={24} xs={24} style={{ border: "1px solid white", padding: "18px", minWidth: "256px" }}>
                                    <h1>Tajweed</h1>
                                    <br /><br />
                                    Jebrail a.s. revealed the Qur’an to the prophet S.A.W. by reading it with tajweed. Therefore it is of paramount importance to learn to read the Qur’an with tajweed. Our tajweed lessons are available.</Col>
                                <Col xl={6} lg={6} sm={24} xs={24} style={{ border: "1px solid white", padding: "18px", minWidth: "256px" }}>
                                    <h1>Fiqh</h1>
                                    <br /><br />
                                    We teach the Fiqh in accordance to the teachings of Ahli Sunnah Wal Jamah (school of itiqat) According to the Imam al Hanfi. However we also teach and take into account the teaching of the other 3 imams.</Col>
                                <Col xl={6} lg={6} sm={24} xs={24} style={{ border: "1px solid white", padding: "18px", minWidth: "256px" }}>
                                    <h1>The Life Of The Prophet</h1>
                                    <br /><br />
                                    We understand that the guide to a pious Islamic life is the Holy Qur’an and the person who lived it to accordance was the Prophet (S.A.W). Therefore, by learning and studying the life of the Prophet (s.a.w) we can better purselves and live in accordance with the Holy Qur’an.</Col>
                            </Row>
                        </div>
                    </Container>
                </Container>
            </section>
            <section>
                <Container>
                    <Container className="cont-another" style={{ marginBottom: "50px" }}>
                        <Row className="group" style={{ borderRadius: "20px", overflow: "hidden" }}>
                            <Col className="left">
                                <img src="https://static.wixstatic.com/media/nsplsh_6d8e12f6a7c549efa9c260ab37b16a4b~mv2.jpg/v1/fill/w_770,h_585,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_6d8e12f6a7c549efa9c260ab37b16a4b~mv2.jpg" />
                            </Col>
                            <Col className="right">
                                <Container>
                                    <div style={{ color: "white" }}>
                                        <h1>Islamic education for adults</h1>
                                        <p>For brothers you can get one to one lessons from one of our imam.</p>
                                        <p>For sisters, you can join one of the classes arranged for ladies only.</p>
                                        <p>Please speak to imam <strong>Tunahan</strong> +353 (87) 406 6894 for all arrangements.</p>
                                    </div>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </section>
        </>
    );
}

export default Education;