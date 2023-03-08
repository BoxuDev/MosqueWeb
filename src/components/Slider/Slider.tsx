import React from 'react';
import { Carousel } from "antd";
import { Container } from "react-bootstrap";
import "./Slider.css";

export const Slider = () => {
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
                    <h3 className="contentStyle">
                        <img src="https://picsum.photos/1920/1080" alt="IMG" />
                    </h3>
                </div>
                <div>
                    <h3 className="contentStyle">
                        <img src="https://picsum.photos/1920/1080" alt="IMG" />
                    </h3>
                </div>
                <div>
                    <h3 className="contentStyle">
                        <img src="https://picsum.photos/1920/1080" alt="IMG" />
                    </h3>
                </div>
                <div>
                    <h3 className="contentStyle">
                        <img src="https://picsum.photos/1920/1080" alt="IMG" />
                    </h3>
                </div>
            </Carousel>
        </Container>
    );
}

export default Slider;