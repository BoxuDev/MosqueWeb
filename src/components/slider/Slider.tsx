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
                        <img src="https://static.wixstatic.com/media/9be301_601fd07916db45fda619ffd4aa482ddf~mv2.jpg/v1/fill/w_1385,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9be301_601fd07916db45fda619ffd4aa482ddf~mv2.jpg" alt="IMG"/>
                    </h3>
                </div>
                <div>
                    <h3 className="contentStyle">
                        <img src="https://static.wixstatic.com/media/11062b_fa03582576c44e92bd262a6bfd1b84c7~mv2.jpg/v1/fill/w_1328,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_fa03582576c44e92bd262a6bfd1b84c7~mv2.jpg" alt="IMG"/>
                    </h3>
                </div>
                <div>
                    <h3 className="contentStyle">
                        <img src="https://static.wixstatic.com/media/11062b_2277fceea18e4ffc82ec7defe747083c~mv2.jpg/v1/fill/w_327,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_2277fceea18e4ffc82ec7defe747083c~mv2.jpg" alt="IMG"/>
                    </h3>
                </div>
                <div>
                    <h3 className="contentStyle">
                        <img src="https://static.wixstatic.com/media/9be301_d8212e884f964831a50bb34fc3ac7069~mv2.jpg/v1/fill/w_1385,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9be301_d8212e884f964831a50bb34fc3ac7069~mv2.jpg" alt="IMG"/>
                    </h3>
                </div>
            </Carousel>
        </>
    );
}

export default Slider;