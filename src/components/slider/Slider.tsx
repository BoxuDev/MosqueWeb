import { Carousel } from 'antd';
import React from 'react';
import "./slider.css";

export const Slider = () => {
    return (
        <>
            <Carousel
                autoplay
                autoplaySpeed={1000}
                arrows
                draggable
                effect="fade"
            >
                <div>
                    <h3 className="contentStyle">
                        <img src="https://picsum.photos/1920/1080" alt="IMG"/>
                    </h3>
                </div>
                <div>
                    <h3 className="contentStyle">
                        <img src="https://picsum.photos/1280/720" alt="IMG"/>
                    </h3>
                </div>
                <div>
                    <h3 className="contentStyle">
                        <img src="https://picsum.photos/1920/1080" alt="IMG"/>
                    </h3>
                </div>
                <div>
                    <h3 className="contentStyle">
                        <img src="https://picsum.photos/1280/720" alt="IMG"/>
                    </h3>
                </div>
            </Carousel>
        </>
    );
}

export default Slider;