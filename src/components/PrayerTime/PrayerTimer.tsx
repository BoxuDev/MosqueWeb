import "./PrayerTime.css";
import React from 'react';
import { Container } from 'react-bootstrap';

const PrayerTimer = () => {
    const uri: string = "https://masjidbox.com/prayer-times/imo-dublin";

    return (
        <Container>
            <iframe
                id='salah-frame'
                src={uri}
                style={{
                    width: "100%",
                    minHeight: "550px",
                    boxShadow: "0 1px 20px 0 gray, 0 1px 20px 0 #136833",
                    borderRadius: "36px",
                    overflow: "hidden",
                    backgroundColor: "#136833",
                    marginBottom: "30px",
                    padding: "24px",
                }}
                allowFullScreen
                frameBorder="0"
            />
        </Container>
    );
}

export default PrayerTimer;