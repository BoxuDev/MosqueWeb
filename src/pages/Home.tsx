import FacilitiesAvaible from "../components/FacilitiesAvaible/FacilitiesAvaible";
import { HadisSlider } from "../components/HadisSlider/HadisSlider";
import { ImageSlider } from "../components/ImgSlider/ImageSlider";
import PrayerTimer from "../components/PrayerTime/PrayerTimer";
import { Slider } from "../components/Slider/Slider";
import React from 'react';
import { SubscribeEmail } from "../components/SubscribeUpdates/SubscribeUpdates";
import AnotherContent from "../components/Sections/AnotherContent/AnotherContent";
import { Image } from "antd";
import imsak2024 from "../assets/imsakiye/imsakiye2024.png";
import { Container } from "react-bootstrap";

function Home() {
    return (
        <>
            <Container >
                <Container className='cont-image-slide' style={{ height: "500px", overflow: "hidden" }}>
                    <Image style={{ borderRadius: "24px" }} src={imsak2024} />
                </Container>
            </Container>
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