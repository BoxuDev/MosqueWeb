import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { Carousel } from 'antd';
import React, { ReactNode, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Hadith } from '../../models/HadithModels';
import './HadithSlider.css';

export const HadisSlider = () => {
    const [hadithsData, setHadithsData] = useState<Hadith[]>([]);

    useEffect(() => {
        fetch('https://www.hadithapi.com/api/hadiths?apiKey=$2y$10$0UhT6lDQmzcm4CPlnU72eKRB1EXnyiEVw677UmuWHlzSc0dK4G')
            .then(response => response.json())
            .then(data => {
                setHadithsData(data.hadiths.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const makeHadithSlider = (hadiths: Hadith[]): ReactNode[] => {
        let hadithSlide: any[] = []
        hadiths.map((e: Hadith) => {
            if ((e.hadithArabic.length > 250) && (e.hadithEnglish.length > 350)) return;
            hadithSlide.push(
                <div className='hadith'>
                    <p className='hadith-english'>{e.hadithEnglish}</p>
                    <p className='hadith-arabic'>{e.hadithArabic}</p>
                </div>
            );
        })
        return hadithSlide;
    }

    return (
        <Container>
            <Container className='cont-hadith'>
                <Carousel
                    autoplay
                    autoplaySpeed={3500}
                    nextArrow={<ArrowRight />}
                    prevArrow={<ArrowLeft />}
                    effect="scrollx"
                    style={{ height: "350px" }}
                    children={makeHadithSlider(hadithsData)}
                />
            </Container>
        </Container>
    );
}