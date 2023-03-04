import FacilitiesAvaible from "../components/FacilitiesAvaible/FacilitiesAvaible";
import { HadisSlider } from "../components/HadisSlider/HadisSlider";
import { ImageSlider } from "../components/ImgSlider/ImageSlider";
import PrayerTime from "../components/PrayerTime/PrayerTime";
import { ContentSection } from "../components/Sections/ContentSection";
import { Slider } from "../components/Slider/Slider";
import React from 'react';
import { SubscribeEmail } from "../components/SubscribeUpdates/SubscribeUpdates";
import AnotherContent from "../components/Sections/AnotherContent/AnotherContent";

function Home() {
    return (
        <>
            <Slider />
            <PrayerTime />
            <ContentSection />
            <ImageSlider />
            <FacilitiesAvaible />
            <HadisSlider />
            <AnotherContent />
            <SubscribeEmail />
        </>
    );
}

export default Home;