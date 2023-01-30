import { Col, Row } from 'antd';
import "./prayer-time.css";

const PrayerTime = () => {
    return (
        <>
            <section style={{ height: "464px" }}>
                <Row style={{ height: "464px" }}>
                    <Col span={24} style={{ height: "464px" }}>
                        <iframe
                            src="https://www-suleymaniye-org.filesusr.com/html/9be301_33a31ba185d27d2b57ff9618f3d66898.html"
                            frameBorder="0"
                            style={{
                                width: "100%",
                                height: "464px"
                            }}
                        />
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default PrayerTime;