import '../styles/App.css';
import React from 'react';
import Layout from 'antd/es/layout';
import { FooterCom } from '../components/Footer/FooterCom';
import { HeaderComp } from '../components/Header/Header';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import Abouts from '../pages/Abouts';
import Donate from '../pages/Donate';
import { RespContent } from '../components/Sections/RespContent';

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
            <RespContent />
          </Content>
        </Route>
        <Route path="/Contact">
          <Content>
            <Abouts />
          </Content>
        </Route>
        <Route path="/Donate">
          <Content
          ><Donate />
          </Content>
        </Route>
        <FooterCom />
      </Layout>
    </div>
  );
}

export default App;