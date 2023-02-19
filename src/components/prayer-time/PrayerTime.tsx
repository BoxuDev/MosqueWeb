import { Col, Row } from 'antd';
import "./PrayerTime.css";
import React from 'react';
import { Container } from 'react-bootstrap';

const PrayerTime = () => {
    const uri: string = "https://www-suleymaniye-org.filesusr.com/html/9be301_33a31ba185d27d2b57ff9618f3d66898.html";

    return (
        <Container className='frameSize cont-frame'>
            <Row className='frameSize cont-frame'>
                <Col span={24} className='frameSize cont-frame'>
                    <iframe
                        src={uri}
                        style={{
                            width: "100%",
                            height: "507px"
                        }}
                        frameBorder="0"
                        className='cont-frame'
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default PrayerTime;