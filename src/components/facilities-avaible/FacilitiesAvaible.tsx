import { Col, Row } from 'antd';
import { MenPrayerRoomIcon } from '../../utils/icons';
import "./facilities-avaible.css";

interface IProps { }

const FacilitiesAvaible = ({ }: IProps) => {
    return (
        <>
            <section>
                <div className="" style={{
                    backgroundColor: "#045184",
                    color: "white",
                    height: "100%"
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
            </section>
        </>
    );
}

export default FacilitiesAvaible;