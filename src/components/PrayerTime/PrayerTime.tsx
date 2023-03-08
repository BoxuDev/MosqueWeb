import "./PrayerTime.css";
import React from 'react';
import { Container } from 'react-bootstrap';

const PrayerTime = () => {
    const uri: string = "https://www-suleymaniye-org.filesusr.com/html/9be301_33a31ba185d27d2b57ff9618f3d66898.html";

    return (
        <Container>
            <iframe
                id='salah-frame'
                src={uri}
                style={{
                    width: "100%",
                    minHeight: "450px",
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
        </Container>
    );
}

export default PrayerTime;