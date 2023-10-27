import FacilitiesAvaible from "../components/FacilitiesAvaible/FacilitiesAvaible";
import { HadisSlider } from "../components/HadisSlider/HadisSlider";
import { ImageSlider } from "../components/ImgSlider/ImageSlider";
import PrayerTimer from "../components/PrayerTime/PrayerTimer";
import { Slider } from "../components/Slider/Slider";
import React from 'react';
import { SubscribeEmail } from "../components/SubscribeUpdates/SubscribeUpdates";
import AnotherContent from "../components/Sections/AnotherContent/AnotherContent";

function Home() {
    return (
        <>
            <Slider />
            {/* <PrayerTimer /> */}
            <ImageSlider />
            {/* <FirebasePost /> */}
            {/* <FacilitiesAvaible /> */}
            <HadisSlider />
            {/* <AnotherContent /> */}
            {/* <SubscribeEmail /> */}
        </>
    );
}

export default Home;