
import './App.css';
import {Routes, Link, Route} from 'react-router-dom';
import {Layout, Space, Typography} from 'antd'
import {Cryptocurrencies, CryptoDetails, Exchanges, Homepage, Navbar, News} from  './components'

function App() {
  return (
    <div className="app">
    <div className="navbar">
<Navbar/>
    </div>
    <div className= "main">
      <Layout>
        <div className = "routes">
          <Routes>
            <Route exact path="/" element={ <Homepage/>}>
            </Route>
            <Route exact path="/exchanges" element={ <Exchanges/>}>
            </Route>
            <Route exact path="/cryptocurrencies" element={ <Cryptocurrencies/>}>
            </Route>
            <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}>
            </Route>
            <Route exact path="/news" element={<News/>}>
            </Route>
          </Routes>

        </div>
      </Layout>
      <div className = "footer">
      <Typography.Title level={5} style={{color:"white", textAlign:"center"}}>
        CryptoVarse <br/>
        All rights reserved
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        <Link to="/news">News</Link>
      </Space>
    </div>
    </div>
   
    </div>
  );
}

export default App;
