import { Button, Col, Row } from 'antd';
import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Education.css';

const Education = () => {
    return (
        <>
            <section>
                <Container>
                    <Container className="cont-another" style={{ marginBottom: "50px" }}>
                        <Row className="group" style={{ borderRadius: "20px", overflow: "hidden" }}>
                            <Col className="left">
                                <img src="https://static.wixstatic.com/media/9be301_257f0d8c01084b40b1f7120d733e1690~mv2.jpeg/v1/fill/w_747,h_622,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9be301_257f0d8c01084b40b1f7120d733e1690~mv2.jpeg" />
                            </Col>
                            <Col className="right">
                                <Container>
                                    <div style={{ color: "white", textAlign: "justify" }}>
                                        <h1>Children's Education</h1>
                                        <p>We have classes for both boys and girls from age 5 till 16 years old. </p>
                                        <p>Classes are from 16:30 - 18:30 Monday to Friday. Saturday from 10:00 - 14:00</p>
                                        <p>Lessons are from 10:00 to 14:00 during school term holidays. </p>
                                        <p>We also run full time summer school, please phone the number below if you are interested for your children.</p>
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
                                <Container>
                                    <div style={{ color: "white" }}>
                                        <h1>If you are interested in a Boarding School for your Child (Secondary School)</h1>
                                        <br /> <br />
                                        <a href='http://marathonschool.com/' target='_blank' style={{ border: "1px solid white", padding: "10px", fontSize: "16px" }}>Go to Marathon School</a>
                                        <br /> <br />
                                        <p>Please get in touch with our Marathon Boys School staff</p>
                                        <br /> <br />
                                    </div>
                                    <Row gutter={[48, 0]}>
                                        <Col>
                                            <div style={{ color: "white", width: "24px", height: "24px" }}>
                                                <i><svg data-bbox="20 20 160 159.999" fill='white' viewBox="0 0 200 200" height="48" width="48" xmlns="http://www.w3.org/2000/svg" data-type="shape">
                                                    <g>
                                                        <path d="M174.754 137.015l-16.878-17.024c-7.055-7.116-18.563-7.186-25.705-.156l-.283.278-.803.794c-5.874 5.808-15.363 5.761-21.178-.105L78.719 89.344c-5.798-5.849-5.75-15.271.108-21.061l.001.001.283-.279c7.142-7.03 7.211-18.499.156-25.615L62.404 25.383c-7.061-7.122-18.581-7.185-25.72-.14l-.001-.001-11.238 11.11c-4.496 4.445-6.458 10.916-4.936 17.042 14.422 58.077 66.325 112.081 124.426 126.073 6.239 1.503 12.817-.21 17.377-4.711l12.003-11.848.284-.279c7.14-7.03 7.21-18.498.155-25.614z"></path>
                                                    </g>
                                                </svg></i>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
                                                <span style={{ fontSize: "16px", marginTop: "8px" }}>School's Landline Phone</span>
                                                <span style={{ fontSize: "16px", marginTop: "8px" }}>+44 (0) 20 7231 3232</span>
                                                <span style={{ fontSize: "16px", marginTop: "8px" }}>School's Mobile Phone</span>
                                                <span style={{ fontSize: "16px", marginTop: "8px" }}>+44 (0) 7599 012224</span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <br /><br /><br />
                                    <Row gutter={[48, 0]}>
                                        <Col>
                                            <div style={{ color: "white", width: "24px", height: "24px" }}>
                                                <i><svg data-bbox="20 44.5 160 110.999" fill='white' viewBox="0 0 200 200" height="48" width="48" xmlns="http://www.w3.org/2000/svg" data-type="shape">
                                                    <g>
                                                        <path d="M109.336 104.331a17.481 17.481 0 0 1-18.671 0L20.222 59.784H20v78.442c0 9.54 7.784 17.273 17.386 17.273h125.228c9.602 0 17.386-7.733 17.386-17.273V59.784h-.222l-70.442 44.547z"></path>
                                                        <path d="M22.578 44.5l.215.125 68.173 43.111a16.917 16.917 0 0 0 18.069 0l68.173-43.111.215-.125H22.578z"></path>
                                                    </g>
                                                </svg></i>
                                            </div>
                                        </Col>
                                        <Col>
                                            <span style={{ color: "white" }}>info@marathonschool.com</span>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col className="right">
                                <img src="https://static.wixstatic.com/media/9be301_9c41fb9d335a4dc1933c565d0ec7353f~mv2.jpeg/v1/fill/w_377,h_631,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9be301_9c41fb9d335a4dc1933c565d0ec7353f~mv2.jpeg" />
                            </Col>
                        </Row>
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