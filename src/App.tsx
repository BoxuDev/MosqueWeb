import Layout from 'antd/es/layout';
import './styles/App.css';
import { FooterCom } from './components/footer/FooterCom';
import { HeaderComp } from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './utils/Home';
import Blogs from './utils/Blogs';
import Abouts from './utils/Abouts';
import Donate from './utils/Donate';
import { ContentSection } from './components/section/RespContent';

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <HeaderComp />


        <ContentSection></ContentSection>

        {/* <>
          <Route path="/" exact><Content><Home /></Content></Route>
          <Route path="/Blog"><Content><Blogs /></Content></Route>
          <Route path="/About"><Content><Abouts /></Content></Route>
          <Route path="/Donate"><Content><Donate /></Content></Route>
        </> */}
        <FooterCom />
      </Layout>
    </div>
  );
}

export default App;