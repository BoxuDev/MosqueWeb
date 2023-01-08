import { Button, Col, Row } from "antd";

interface ContentSectionProps {

}

export const ContentSection = () => {


    return (
        <>
            <section>
                <Row style={{
                    display: "flex"
                }}>
                    <Col style={{
                        float: "left",
                        width: "50%",
                        height: "100%",
                    }}>
                        <img src="https://static.wixstatic.com/media/9be301_dd4932b52d2640ec80b9cfdca572e9b7~mv2.jpg/v1/fill/w_599,h_615,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9be301_dd4932b52d2640ec80b9cfdca572e9b7~mv2.jpg" alt="" />
                    </Col>
                    <Col className="text-content-area" style={{
                        backgroundColor: "rgb(255, 187,2)",
                        height: "100%",
                        float: "left",
                        width: "50%",
                    }}>
                        <span style={{}}>SULEYMANIYE</span>
                        <span style={{}}>AID</span>
                        <p>International Response</p>
                        <ul>
                            <li>Established a water fund in places such as Africa, Pakistan and Bangladesh.</li>
                            <li>Aiding in the practice of ‘Qurbani’ every year during ‘Dhul Hijjah’ and subsequently helping in food distribution to struggling and/or third-world countries.</li>
                            <li>Providing humanitarian aid for the welfare and wellbeing of children worldwide.</li>
                            <li>Assisting in ‘green projects’ (such as planting trees and installing solar panels) for the betterment of our plant and the survival of future generations.</li>
                        </ul>
                        <Button>Learn More</Button>
                    </Col>
                </Row>
            </section>
        </>
    );
}