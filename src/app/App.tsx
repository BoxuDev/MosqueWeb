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
import DoComponent from '../pages/DoComponent';

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

        <Route path="/DoSomething">
          <Content>
            <DoComponent/>
          </Content>
        </Route>
        
        <Route path="/IslamicEbook">
          <Content>
            <DoComponent/>
          </Content>
        </Route>

        <FooterCom />
      </Layout>
    </div>
  );
}

export default App;