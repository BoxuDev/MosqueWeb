import FacilitiesAvaible from "../components/facilities-avaible/FacilitiesAvaible";
import { HadisSlider } from "../components/hadis-slider/HadisSlider";
import { ImageSlider } from "../components/img-slider/ImageSlider";
import PrayerTime from "../components/prayer-time/PrayerTime";
import { ContentSection } from "../components/section/ContentSection";
import { Slider } from "../components/slider/Slider";
import * as React from 'react';

import { SubscribeEmail } from "../components/subscribe-updates/subscribe-updates";

function Home() {
    return (
        <>
            <Slider />
            <FacilitiesAvaible />
            <PrayerTime />
            <HadisSlider />
            <ImageSlider />
            <ContentSection />
            <ContentSection />
            <ContentSection />
            <ContentSection />
            <ContentSection />
            <SubscribeEmail />
        </>
    );
}

export default Home;