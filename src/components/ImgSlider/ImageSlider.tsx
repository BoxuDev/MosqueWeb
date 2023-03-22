import { Carousel } from 'react-carousel-minimal';
import { Container } from 'react-bootstrap';
import React from 'react';
import './ImageSlider.css';
import P1 from '../../assets/Slider/Picture1.jpg';
import P2 from '../../assets/Slider/Picture2.jpg';
import P3 from '../../assets/Slider/Picture3.jpg';
import P4 from '../../assets/Slider/Picture4.jpg';
import P5 from '../../assets/Slider/Picture5.jpg';
import P6 from '../../assets/Slider/Picture6.jpg';
import P7 from '../../assets/Slider/Picture7.jpg';
import P8 from '../../assets/Slider/Picture8.jpg';
import P9 from '../../assets/Slider/Picture9.jpg';
import P10 from '../../assets/Slider/Picture10.jpg';
import P11 from '../../assets/Slider/Picture11.jpg';

export const ImageSlider = () => {
    const data = [
        {
            image: P1
            // caption: "San Francisco"
        },
        {
            image: P2
            // caption: "Scotland"
        },
        {
            image: P3
            // caption: "Darjeeling"
        },
        {
            image: P4
            // caption: "San Francisco"
        },
        {
            image: P5
            // caption: "Scotland"
        },
        {
            image: P6
            // caption: "Darjeeling"
        },
        {
            image: P7
            // caption: "San Francisco"
        },
        {
            image: P8
            // caption: "Scotland"
        },
        {
            image: P9
            // caption: "Darjeeling"
        },
        {
            image: P10
            // caption: "Darjeeling"
        },
        {
            image: P11
            // caption: "Darjeeling"
        }
    ];

    return (
        <Container>
            <Container className='cont-image-slide'>
                <Carousel
                    data={data}
                    time={3500}
                    width="auto"
                    height="500px"
                    radius="36px"
                    slideNumber={false}
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="#136833"
                    slideImageFit="cover"
                    thumbnailWidth="100px"
                    thumbnails={true}
                    thumbnailsStyle
                />
            </Container>
        </Container>
    );
}