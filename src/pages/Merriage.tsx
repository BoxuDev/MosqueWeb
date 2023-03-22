import { Button, Row } from 'antd';
import React from 'react';
import { Container } from 'react-bootstrap';

const Merriage = () => {
    return (
        <Container>
            <div>
                <div style={{
                    
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: "500px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    borderRadius: "18px"
                }}>
                    <Row style={{
                        color: "#C74300",
                        fontSize: "36px",
                        display: "flex",
                        justifyContent: "center",
                        marginLeft: "12px",
                        marginTop: "12px",
                        fontFamily: "poppins-semibold, poppins, sans-serif",
                        fontWeight: "700",
                        letterSpacing: "-0.02em"
                    }}>Islamic Marriage</Row>
                     <Row>For details of the Nikah process at the Suleymaniye Mosque London, including how to apply. 079 3050 7610.</Row>
                    <Row style={{
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center"
                    }} gutter={[0, 32]}>
                        <Button
                            className='buttonVis'
                            onClick={() => { }}
                        ><a href="https://www.suleymaniyefunerals.com/en">Wisit Funeral WebSite</a></Button>
                    </Row>
                </div>
            </div>
        </Container>
    );
}

export default Merriage;