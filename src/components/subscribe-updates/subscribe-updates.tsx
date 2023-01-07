import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';

interface SubscribeEmailProps {

}

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
                    boxShadow: "0 1px 25px 0 gray, 0 1px 25px 0 gray",
                    textAlign: "center",
                    paddingBottom: "10px",
                    borderRadius: "16px"
                }}>
                    <Row>
                        <h2>Subscribe to get exclusive updates</h2>
                    </Row>
                    <Row>
                        <span style={{
                            color: "black",
                            display: "flex"
                        }}>E-Mail *</span>
                        <Input.Group compact>
                            <Input style={{ width: 'calc(100% - 200px)' }} defaultValue="https://ant.design" />
                            <Button type="primary">Submit</Button>
                        </Input.Group>
                    </Row>
                </div>
            </section>
        </>
    );
}
