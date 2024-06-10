import { HadisSlider } from "../components/HadisSlider/HadisSlider";
import { ImageSlider } from "../components/ImgSlider/ImageSlider";
import PrayerTimer from "../components/PrayerTime/PrayerTimer";
import { Slider } from "../components/Slider/Slider";
import React from 'react';
import { FloatButton, Image } from "antd";
import imsak2024 from "../assets/imsakiye/imsakiye2024.png";
import { HomeLander } from "../components/HomeLander";
import { useHistory } from "react-router";
import icon from "../assets/donateButton.png";

function Home() {
    const history = useHistory();

    const Bicon = () => (<img src={icon} height={64} width={64}/>);

    return (
        <>
            <FloatButton
                className="quick-donate-button"
                type="primary"
                shape="square"
                style={{
                    backgroundColor: "inherit",
                    width: "72px",
                    height: "72px",
                    right: "24px",
                    bottom: "24px"
                }}
                onClick={() => history.push('/Donate/Sadaqa')}
                tooltip={<div>Donate quickly {":)"}</div>}
                description="Sadaqa"
                icon={<Bicon />}
            />

            {/* <Container >
                <Container className='cont-image-slide' style={{ height: "500px", overflow: "hidden" }}>
                    <Image style={{ borderRadius: "24px" }} src={imsak2024} />
                </Container>
            </Container> */}
            <Slider />
            <PrayerTimer />
            <HomeLander />
            <HadisSlider />
            <ImageSlider />
        </>
    );
}

export default Home;