import './styles/App.css';
import React from 'react';
import Layout from 'antd/es/layout';
import { FooterCom } from './components/footer/FooterCom';
import { HeaderComp } from './components/header/Header';
import { Route } from 'react-router-dom';
import Home from './utils/Home';
import Blogs from './utils/Blogs';
import Abouts from './utils/Abouts';
import Donate from './utils/Donate';
import { RespContent } from './components/section/RespContent';

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