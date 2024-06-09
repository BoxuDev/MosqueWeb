import '../styles/App.css';
import React from 'react';
import Layout from 'antd/es/layout';
import { FooterCom } from '../components/Footer/FooterCom';
import { HeaderComp } from '../components/Header/Header';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import Abouts from '../pages/Abouts';
import { RespContent } from '../components/Sections/RespContent/RespContent';
import AboutIslam from '../pages/AboutIslam';
import FastingRamadan from '../pages/FastingRamadan';
import ZekahCharity from '../pages/ZekahCharity';
import HajjUmrah from '../pages/HajjUmrah';
import PrayerTime from '../pages/PrayerTime';
import BriefIntroduction from '../pages/BriefIntroduction';
import EarthQuake from '../pages/EarthQuake';
import Education from '../pages/Education';
import Chaplaincy from '../pages/Chaplaincy';
import HelalFood from '../pages/HelalFood';
import Marriage from '../pages/Marriage';
import PrayerIslam from '../pages/PrayerIslam';
import Ramadan from '../pages/Ramadan';
import OtherDon from '../pages/Donates/OtherDon';
import ZakahDon from '../pages/Donates/ZakahDon';
import IftarDon from '../pages/Donates/IftarDon';
import SadaqaDon from '../pages/Donates/SadaqaDon';
import QurbaniDon from '../pages/Donates/QurbaniDon';
import SingIn from '../components/admin/SingIn';
import { GalleryPage } from '../components/Gallery/GallerPage';

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <HeaderComp />

        <Route path="/" exact>
          <Content>
            <Home />
          </Content>
        </Route>

        <Route path="/Home">
          <Content>
            <Home />
          </Content>
        </Route>

        <Route path="/Blogs">
          <Content>
            <Blogs />
          </Content>
        </Route>

        <Route path="/Abouts">
          <Content>
            <Abouts />
          </Content>
        </Route>

        <Route path="/Contact">
          <Content>
            <RespContent />
          </Content>
        </Route>

        <Route path="/EarthQuake">
          <Content>
            <EarthQuake />
          </Content>
        </Route>

        <Route path="/AboutIslam">
          <Content>
            <PrayerIslam />
          </Content>
        </Route>

        <Route path="/PrayerIslam">
          <Content>
            <AboutIslam />
          </Content>
        </Route>

        <Route path="/PrayerTime">
          <Content>
            <PrayerTime />
          </Content>
        </Route>

        <Route path="/FastingRamadan">
          <Content>
            <FastingRamadan />
          </Content>
        </Route>

        <Route path="/ZekahCharity">
          <Content>
            <ZekahCharity />
          </Content>
        </Route>

        <Route path="/Education">
          <Content>
            <Education />
          </Content>
        </Route>

        <Route path="/HajjUmrah">
          <Content>
            <HajjUmrah />
          </Content>
        </Route>

        <Route path="/Chaplaincy">
          <Content>
            <Chaplaincy />
          </Content>
        </Route>

        <Route path="/Marriage">
          <Content>
            <Marriage />
          </Content>
        </Route>

        <Route path="/HelalFood">
          <Content>
            <HelalFood />
          </Content>
        </Route>

        <Route path="/BriefIntroduction">
          <Content>
            <BriefIntroduction />
          </Content>
        </Route>

        <Route path="/Ramadan">
          <Content>
            <Ramadan />
          </Content>
        </Route>

        <Route path="/Donate/Other">
          <Content>
            <OtherDon />
          </Content>
        </Route>

        <Route path="/Donate/Zakah">
          <Content>
            <ZakahDon />
          </Content>
        </Route>

        <Route path="/Donate/Sadaqa">
          <Content>
            <SadaqaDon />
          </Content>
        </Route>

        <Route path="/Donate/Iftar">
          <Content>
            <IftarDon />
          </Content>
        </Route>

        <Route path="/Donate/Qurbani">
          <Content>
            <QurbaniDon />
          </Content>
        </Route>

        <Route path="/admin">
          {/* <Content> */}
          <SingIn />
          {/* </Content> */}
        </Route>

        <Route path="/Gallery">
          {/* <Content> */}
          <GalleryPage />
          {/* </Content> */}
        </Route>

        <FooterCom />
      </Layout>
    </div>
  );
}

export default App;