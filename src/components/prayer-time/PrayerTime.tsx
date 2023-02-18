import { Col, Row } from 'antd';
import "./prayer-time.css";
import React from 'react';
import { Container } from 'react-bootstrap';

const PrayerTime = () => {
    return (
        <>
            <section style={{ height: "507px", marginBottom: "60px" }}>
                <Container>
                    <Row style={{ height: "507px" }}>
                        <Col span={24} style={{ height: "507px" }}>
                            <iframe
                                src="https://www-suleymaniye-org.filesusr.com/html/9be301_33a31ba185d27d2b57ff9618f3d66898.html"
                                frameBorder="0"
                                style={{
                                    width: "100%",
                                    height: "507px"
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default PrayerTime;