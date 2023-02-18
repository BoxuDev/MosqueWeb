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
                console.log(data.hadiths.data);
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
                <div>
                    <p className='hadith-english'>{e.hadithEnglish}</p>
                    <p className='hadith-arabic'>{e.hadithArabic}</p>
                </div>
            );
        })
        return hadithSlide;
    }

    return (
        <section style={{ padding: "15px" }}>
            <Container>
                <div style={{
                    border: "1px solid red",
                    borderRadius: "18px",
                    padding: "15px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    backgroundColor: "#4398c7"
                }}>
                    <Carousel
                        autoplay
                        autoplaySpeed={10000}
                        arrows
                        effect="scrollx"
                        style={{ maxHeight: "500px" }}
                        children={makeHadithSlider(hadithsData)}
                    />
                </div>
            </Container>
        </section>
    );
}