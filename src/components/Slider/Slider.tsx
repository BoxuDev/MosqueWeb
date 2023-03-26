import React from 'react';
import { Button, Carousel, Row } from "antd";
import { Container } from "react-bootstrap";
import "./Slider.css";
import marr from "../../assets/Files/marr.jpg";

export const Slider = () => {
    const imgOne: string = "https://static.wixstatic.com/media/nsplsh_7890bcb5dbc1458b9aca37b5249002fa~mv2.jpg/v1/fill/w_980,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_7890bcb5dbc1458b9aca37b5249002fa~mv2.jpg";
    const imgTwo: string = "https://static.wixstatic.com/media/9be301_6bdb56fa9eb74b68abaefd60180be19a~mv2.jpeg/v1/fill/w_1600,h_537,al_c,q_85,enc_auto/9be301_6bdb56fa9eb74b68abaefd60180be19a~mv2.jpeg";

    return (
        <Container>
            <Carousel
                autoplay
                autoplaySpeed={3800}
                arrows
                draggable
                className='cont'
                effect='scrollx'
            >
                <div>
                    Islam in Ireland
                    https://en.wikipedia.org/wiki/Islam_in_the_Republic_of_Ireland

                </div>
                <div>
                    Croke Park Muslim Eid
                    https://www.irishtimes.com/ireland/2022/07/09/eid-celebrations-at-croke-park-we-can-celebrate-our-irish-muslim-identity-in-the-most-iconic-irish-venue/
                </div>
                <div>
                    Discover Ireland
                    https://www.discoverireland.ie/
                </div>

                <div>
                    <div style={{backgroundImage: `url(${marr})`}} className='slider-content-main'>
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
                        <Row style={{ fontSize: "16px", marginTop: "20px", fontWeight: "550", backgroundColor: "#136833", padding: "8px", color: "white" }}>For details of the Nikah process at the Suleymaniye Mosque London, including how to apply. +353 (87) 406 6894.</Row>
                    </div>
                </div>
            </Carousel>
        </Container>
    );
}

export default Slider;