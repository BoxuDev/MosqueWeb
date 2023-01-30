import Layout from 'antd/es/layout';
import './styles/App.css';
import { FooterCom } from './components/footer/FooterCom';
import { HeaderComp } from './components/header/Header';
import { Route } from 'react-router-dom';
import Home from './utils/Home';
import Blogs from './utils/Blogs';
import Abouts from './utils/Abouts';

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <HeaderComp />
        <>
          <Route path="/" exact><Content><Home /></Content></Route>
          <Route path="/Blog"><Content><Blogs /></Content></Route>
          <Route path="/About"><Content><Abouts /></Content></Route>
        </>
        <FooterCom />
      </Layout>
    </div>
  );
}

export default App;