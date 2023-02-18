import { Col, Row } from 'antd';
import { MenPrayerRoomIcon } from '../../utils/icons';
import "./facilities-avaible.css";
import React from 'react';
import { Container } from 'react-bootstrap';

interface IProps { }

const FacilitiesAvaible = ({ }: IProps) => {
    return (
        <>
            <section>
                <Container>
                    <div style={{
                        backgroundColor: "#008696",
                        color: "#e2cd9f",
                        height: "100%",
                    }}>
                        <Row >
                            <div style={{
                                display: "flex",
                                fontSize: "48px",
                                marginTop: "20px",
                                marginBottom: "20px",
                                justifyContent: "center"
                            }}>Facilities Available</div>
                        </Row>
                        <Row style={{ marginTop: "10px" }}>
                            <Col>
                                <MenPrayerRoomIcon />
                            </Col>
                            <Col>
                                <MenPrayerRoomIcon />
                            </Col>
                            <Col>
                                <MenPrayerRoomIcon />
                            </Col>
                            <Col>
                                <MenPrayerRoomIcon />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <MenPrayerRoomIcon />
                            </Col>
                            <Col>
                                <MenPrayerRoomIcon />
                            </Col>
                            <Col>
                                <MenPrayerRoomIcon />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default FacilitiesAvaible;