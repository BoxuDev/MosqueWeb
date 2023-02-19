import { Button, Col, Input, Row } from 'antd';
import { Container } from 'react-bootstrap';
import React from 'react';
import './SubscribeUpdates.css';

export const SubscribeEmail = () => {
    return (
        <Container>
            <Container className='cont-sub'>
                <Row>
                    <h2 className='sub-title'>Subscribe to get exclusive updates</h2>
                </Row>
                <Row>
                    <Col span={4} />
                    <Input.Group compact>
                        <Input
                            style={{
                                width: '80%',
                                borderRadius: "1px",
                                border: "3px solid rgb(246, 235, 228)"
                            }}
                            className='sub-input'
                            placeholder="email@example.com"
                        />
                        <Button
                            type="primary"
                            className='sub-button'
                        >Join Our Mailing List</Button>
                    </Input.Group>
                </Row>
            </Container>
        </Container>
    );
}