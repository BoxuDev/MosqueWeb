import Layout from 'antd/es/layout';
import React from 'react';
import './styles/App.css';
import Slider from './components/slider/Slider';
import { FooterCom } from './components/footer/FooterCom';
import FacilitiesAvaible from './components/facilities-avaible/FacilitiesAvaible';
import PrayerTime from './components/prayer-time/PrayerTime';
import { HeaderComp } from './components/header/Header';
import { SubscribeEmail } from './components/subscribe-updates/subscribe-updates';
import { ImageSlider } from './components/img-slider/ImageSlider';
import { ContentSection } from './components/section/ContentSection';
import { HadisSlider } from './components/hadis-slider/HadisSlider';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <HeaderComp />
        <Content>
          <Slider />
          <FacilitiesAvaible />
          <PrayerTime />
          <SubscribeEmail />
          <HadisSlider />
          <ImageSlider />
          <ContentSection />
        </Content>
        <FooterCom />
      </Layout>
    </div>
  );
}

export default App;