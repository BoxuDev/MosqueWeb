import { Col, Row } from 'antd';
import { MenPrayerRoomIcon } from '../../utils/icons';
import "./facilities-avaible.css";
import React from 'react';
import { Container } from 'react-bootstrap';

const FacilitiesAvaible = () => {
    return (
        <Container className='cont-class'>
            <div className='cont-div brdr'>
                <Row >
                    <div className='cont-title mg-top'>Facilities Available</div>
                </Row>
                <Row className='brdr mg-top'>
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
    );
}

export default FacilitiesAvaible;