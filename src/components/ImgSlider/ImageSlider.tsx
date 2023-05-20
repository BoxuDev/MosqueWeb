import { Carousel } from 'react-carousel-minimal';
import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
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

interface ImageObject {
    image: any;
}

export const ImageSlider = () => {
    const [images, setImages] = useState<ImageObject[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(false);
        let data: ImageObject[] = [];
        let tempImages = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11];
        tempImages.map(item => data.push({image: item}));
        setImages(data);
        setLoading(true);
    }, []);

    return (
        <>
            {loading &&
                <Container>
                    <Container className='cont-image-slide'>
                        <Carousel
                            data={images}
                            time={5000}
                            width="auto"
                            height="500px"
                            radius="36px"
                            slideNumber={false}
                            dots
                            slideBackgroundColor="#136833"
                            slideImageFit="cover"
                            thumbnailWidth="100px"
                            thumbnails={true}
                            thumbnailsStyle
                        />
                    </Container>
                </Container>
            }
        </>
    );
}