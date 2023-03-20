import { Button, Col, Row } from "antd";
import { Container } from "react-bootstrap";
import "./AnotherContent.css";
import "../ContentSection.css";

const AnotherContent = () => {
    return (
        <Container>
            <Container className="cont-another" style={{ marginBottom: "50px" }}>
                <Row className="group" style={{ borderRadius: "20px", overflow: "hidden" }}>
                    <Col className="left">
                        <img src="https://static.wixstatic.com/media/9be301_dd4932b52d2640ec80b9cfdca572e9b7~mv2.jpg/v1/fill/w_599,h_615,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9be301_dd4932b52d2640ec80b9cfdca572e9b7~mv2.jpg" alt="" />
                    </Col>
                    <Col className="right">
                        <Container>
                            <Row>
                                <Col className="title">
                                    <Container>
                                        <span className="text-part-one">SULEYMANIYE</span>
                                        <span className="text-part-two">AID</span>
                                    </Container>
                                </Col>
                            </Row>
                            <Row>
                                <div style={{ color: "white", textAlign: "justify", fontSize: "16px", }}>
                                    <span style={{ marginTop: "20px" }}>International Response</span>
                                    <ul style={{ marginTop: "16px" }}>
                                        <li style={{ marginBottom: "8px" }}>Established a water fund in places such as Africa, Pakistan and Bangladesh.</li>
                                        <li style={{ marginBottom: "8px" }}>Aiding in the practice of ‘Qurbani’ every year during ‘Dhul Hijjah’ and subsequently helping in food distribution to struggling and/or third-world countries.</li>
                                        <li style={{ marginBottom: "8px" }}>Providing humanitarian aid for the welfare and wellbeing of children worldwide.</li>
                                        <li>Assisting in ‘green projects’ (such as planting trees and installing solar panels) for the betterment of our plant and the survival of future generations.</li>
                                    </ul>
                                </div>
                                <a href="https://www.suleymaniyeaid.com/" style={{border: "1px solid", padding: ""}}>Suleymaniye Aid</a>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default AnotherContent;