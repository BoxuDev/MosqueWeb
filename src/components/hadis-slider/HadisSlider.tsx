import { Carousel } from 'antd';
import React, { ReactNode, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

interface HadisSliderProps { }

export interface Book {
    id: number;
    bookName: string;
    writerName: string;
    aboutWriter?: any;
    writerDeath: string;
    bookSlug: string;
}

export interface Chapter {
    id: number;
    chapterNumber: string;
    chapterEnglish: string;
    chapterUrdu: string;
    chapterArabic: string;
    bookSlug: string;
}

export interface Hadith {
    id: number;
    hadithNumber: string;
    englishNarrator: string;
    hadithEnglish: string;
    hadithUrdu: string;
    urduNarrator: string;
    hadithArabic: string;
    chapterId: string;
    bookSlug: string;
    volume: string;
    book: Book;
    chapter: Chapter;
}

export const HadisSlider = (props: HadisSliderProps) => {
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
            hadithSlide.push(
                <div>
                    <h3
                        style={{

                        }}>
                        {e.englishNarrator}
                    </h3>
                    <p
                        style={{

                        }}>
                        {e.hadithEnglish}
                    </p>
                    <p style={{

                    }}>
                        {e.hadithArabic}
                    </p>
                </div>
            );
        })

        return hadithSlide;
    }

    return (
        <>
            <section style={{
                padding: "15px"
            }}>
                <Container>
                    <div style={{
                        border: "1px solid red",
                        padding: "15px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        backgroundColor: "#4398c7"
                    }}>
                        <Carousel
                            autoplay
                            autoplaySpeed={1000}
                            arrows

                            // draggable
                            effect="scrollx"
                            style={{ height: "200px" }}
                        >
                            {makeHadithSlider(hadithsData)}
                        </Carousel>
                    </div>
                </Container>
            </section>
        </>
    );
}