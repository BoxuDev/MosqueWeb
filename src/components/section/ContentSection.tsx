import { Button, Col, Row } from "antd";
import "./content-section.css";
interface ContentSectionProps { }

export const ContentSection = ({ }: ContentSectionProps) => {
    return (
        <>
            <section style={{ padding: "20px" }}>
                <Row className="group" style={{ borderRadius: "20px", overflow: "hidden" }}>
                    <Col className="left">
                        <img src="https://static.wixstatic.com/media/9be301_dd4932b52d2640ec80b9cfdca572e9b7~mv2.jpg/v1/fill/w_599,h_615,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9be301_dd4932b52d2640ec80b9cfdca572e9b7~mv2.jpg" alt="" />
                    </Col>
                    <Col className="right">
                        <Row>
                            <Col className="title">
                                <span className="text-part-one">SULEYMANIYE</span>
                                <span className="text-part-two">AID</span>
                            </Col>
                        </Row>
                        <Row>
                            <span>International Response</span>
                            <ul>
                                <li>Established a water fund in places such as Africa, Pakistan and Bangladesh.</li>
                                <li>Aiding in the practice of ‘Qurbani’ every year during ‘Dhul Hijjah’ and subsequently helping in food distribution to struggling and/or third-world countries.</li>
                                <li>Providing humanitarian aid for the welfare and wellbeing of children worldwide.</li>
                                <li>Assisting in ‘green projects’ (such as planting trees and installing solar panels) for the betterment of our plant and the survival of future generations.</li>
                            </ul>
                        </Row>
                        <Button style={{
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                            color: "white",
                            margin: "20px",
                            height: "50px", width: "150px",
                            border: "1px solid white",
                            borderRadius: "30px",
                            background: "rgb(55, 59, 77)"
                        }}>Learn More</Button>
                    </Col>
                </Row>
            </section>
        </>
    );
}