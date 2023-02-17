import { Button, Col, Input, Row } from 'antd';
import React from 'react';
import { Container } from 'react-bootstrap';

interface SubscribeEmailProps { }

export const SubscribeEmail = ({ }: SubscribeEmailProps) => {
    return (
        <>
            <section style={{
                height: "200px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                width: "100vw"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                    minWidth: "calc(100vw - 10%)",
                    boxShadow: "0 1px 20px 0 gray, 0 1px 20px 0 white",
                    textAlign: "center",
                    paddingBottom: "10px",
                    borderRadius: "16px"
                }}>
                    <Container>
                        <Row>
                            <h2 style={{ paddingInline: "12px", position: "relative" }}>Subscribe to get exclusive updates</h2>
                        </Row>
                        <Row>
                            <Col span={4}>
                            </Col>
                            <Input.Group compact>
                                <Input
                                    style={{
                                        width: 'calc(100% - 200px)',
                                        borderRadius: "1px",
                                        border: "3px solid rgb(246, 235, 228)"
                                    }}
                                    placeholder="email@example.com" />
                                <Button
                                    type="primary"
                                    style={{
                                        borderRadius: "1px",
                                        height: "auto",
                                        background: "rgb(246, 235, 228)",
                                        alignItems: "center",
                                        border: "3px solid rgb(246, 235, 228)",
                                        color: "black",
                                        boxShadow: "none"
                                    }}
                                    onClick={() => {
                                        console.log("Buton Click Subscribe")
                                        alert("Buton Click Subscribe");
                                    }}
                                >Join Our Mailing List</Button>
                            </Input.Group>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
}