import { Container } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
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

const imageObjects = [
    {
        original: P1,
        thumbnail: P1
    },
    {
        original: P2,
        thumbnail: P2
    },
    {
        original: P3,
        thumbnail: P3
    },
    {
        original: P4,
        thumbnail: P4
    },
    {
        original: P5,
        thumbnail: P5
    },
    {
        original: P6,
        thumbnail: P6
    },
    {
        original: P7,
        thumbnail: P7
    }
]

export const ImageSlider = () => {
    return (
        <Container>
            <Container className='cont-image-slide'>
                <ImageGallery
                    items={imageObjects}
                    //lazyLoad
                    infinite
                    useTranslate3D={false}
                />
            </Container>
        </Container>
    );
}