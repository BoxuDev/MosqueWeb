import { Carousel } from 'antd';
import React from 'react';

interface HadisSliderProps { }

interface Hadith {
    number: number;
    arab: string;
    id: string;
}

export const HadisSlider = ({ }: HadisSliderProps) => {

    // https://api.hadith.gading.dev/books/muslim?range=1-150


    return (
        <>
            <Carousel>

            </Carousel>
        </>
    );
}