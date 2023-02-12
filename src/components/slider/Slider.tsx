import "./slider.css";
import React from 'react';
import { Carousel } from "antd";

export const Slider = () => {
    return (
        <>
            <Carousel
                autoplay
                autoplaySpeed={1000}
                arrows
                draggable
                effect="fade"
                style={{
                    padding: "50px"
                }}
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
        </>
    );
}

export default Slider;