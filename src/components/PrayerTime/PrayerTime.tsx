import { Col, Row } from 'antd';
import "./PrayerTime.css";
import React from 'react';
import { Container } from 'react-bootstrap';
import { borderRadius } from '@mui/system';

const PrayerTime = () => {
    const uri: string = "https://www-suleymaniye-org.filesusr.com/html/9be301_33a31ba185d27d2b57ff9618f3d66898.html";

    return (
        <Container>
            <Row>
                <Col span={24}>
                    <iframe
                        id='salah-frame'
                        src={uri}
                        style={{
                            width: "100%",
                            minHeight: "600px",
                            boxShadow: "0 1px 20px 0 gray, 0 1px 20px 0 #008696",
                            borderRadius: "36px",
                            overflow: "hidden",
                            backgroundColor: "#008696",
                            marginBottom: "50px",
                            padding: "24px",
                        }}
                        allowFullScreen
                        frameBorder="0"
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default PrayerTime;