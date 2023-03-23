import { Row } from 'antd';
import React from 'react';
import { Container } from 'react-bootstrap';
import marr from "../assets/Files/marr.jpg";

const Merriage = () => {
    return (
        <Container>
            <Container className="cont-another" style={{ marginBottom: "50px" }}>
                <div>
                    <div style={{
                        backgroundImage: `url(${marr})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: "500px",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexDirection: "column",
                        borderRadius: "18px",
                        marginTop: "20px"
                    }}>
                        <Row style={{
                            color: "#136833",
                            fontSize: "36px",
                            display: "flex",
                            justifyContent: "flex-start",
                            marginLeft: "12px",
                            marginTop: "36px",
                            fontFamily: "helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif",
                            fontWeight: "700",
                            letterSpacing: "-0.02em"
                        }}>Islamic Marriage</Row>
                        <Row style={{ fontSize: "16px", marginTop: "20px", fontWeight: "550", backgroundColor: "#136833", padding: "8px", color: "white" }}>For details of the Nikah process at the Dublin Abdulmecid Mosque, Call us. +353 (87) 406 6894.</Row>
                    </div>
                </div>
            </Container>
        </Container>
    );
}

export default Merriage;