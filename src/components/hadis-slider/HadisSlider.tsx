import { Carousel } from 'antd';
import React, { useEffect } from 'react';

interface HadisSliderProps { }

interface Hadith {
    number: number;
    arab: string;
    id: string;
}

export const HadisSlider = ({ }: HadisSliderProps) => {
    useEffect(() => {
        fetch('https://www.hadithapi.com/api/hadiths?apiKey=$2y$10$0UhT6lDQmzcm4CPlnU72eKRB1EXnyiEVw677UmuWHlzSc0dK4G')
            .then(response => response.json())
            .then(data => {
                console.log(data.hadiths.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <>
            <Carousel>

            </Carousel>
        </>
    );
}