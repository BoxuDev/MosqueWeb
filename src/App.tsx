import Layout from 'antd/es/layout';
import React from 'react';
import './styles/App.css';
import Slider from './components/slider/Slider';
import FooterCom from './components/footer/FooterCom';
import FacilitiesAvaible from './components/facilities-avaible/FacilitiesAvaible';
import PrayerTime from './components/prayer-time/PrayerTime';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{
          height: "10vh",
          backgroundColor: "rgb(70, 130, 180)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>HEADER</Header>
        <Content>
          <Slider />
          <FacilitiesAvaible />
          <PrayerTime />
        </Content>
        <Footer>
          <FooterCom />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;