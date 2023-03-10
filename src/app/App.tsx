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
            EarthQuake
          </Content>
        </Route>

        <Route path="/AboutIslam">
          <Content>
            About Islam
          </Content>
        </Route>

        <Route path="/PrayerIslam">
          <Content>
            Prayer Islam
          </Content>
        </Route>

        <Route path="/PrayerTime">
          <Content>
            PrayerTime
          </Content>
        </Route>

        <Route path="/FastingRamadan">
          <Content>
            FastingRamadan
          </Content>
        </Route>

        <Route path="/ZekahCharity">
          <Content>
            ZekahCharity
          </Content>
        </Route>

        <Route path="/Education">
          <Content>
            Education
          </Content>
        </Route>

        <Route path="/HajjUmrah">
          <Content>
            HajjUmrah
          </Content>
        </Route>

        <Route path="/Funeral">
          <Content>
            Funeral
          </Content>
        </Route>

        <Route path="/Merriage">
          <Content>
            Merriage
          </Content>
        </Route>

        <Route path="/HelalFood">
          <Content>
            HelalFood
          </Content>
        </Route>

        <FooterCom />
      </Layout>
    </div>
  );
}

export default App;