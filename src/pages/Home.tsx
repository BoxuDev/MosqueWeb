import { HadisSlider } from "../components/HadisSlider/HadisSlider";
import { ImageSlider } from "../components/ImgSlider/ImageSlider";
import PrayerTimer from "../components/PrayerTime/PrayerTimer";
import { Slider } from "../components/Slider/Slider";
import React from 'react';
import { FloatButton } from "antd";
import { HomeLander } from "../components/HomeLander";
import { useHistory } from "react-router";
import icon from "../assets/donateButton.png";

function Home() {
    const history = useHistory();

    const Bicon = () => (<img src={icon} height={64} width={64} />);

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
            <Slider />
            <PrayerTimer />
            <HomeLander />
            <HadisSlider />
            <ImageSlider />
        </>
    );
}

export default Home;