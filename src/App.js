import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import Defi from './components/DeFi/Defi';
import Alts from './components/Alts/Alts';
import Intro from './components/Intro/Intro';
import Wallets from './components/Wallets/Wallets';
import Footer from './components/Footer/Footer';
import Tools from './components/DeFi/Sections/Tools';
import Tutorials from './components/DeFi/Sections/Tutorials'

function App() {
  let component;
  let footer;
  switch(window.location.pathname){
    case '/':
      component=<MainPage/>;
      footer = false;
      break
    case '/intro':
      component=<Intro/>;
      footer = true;
      break;
    case '/alts':
      component = <Alts/>;
      footer = true;
      break;
    case '/wallets':
      component=<Wallets/>;
      footer = true;
      break;
    case '/defi':
      component=<Defi/>;
      footer = true;
      break;
    case '/defi/tools':
      component=<Tools/>;
      footer = false;
      break;
    case '/defi/tutorials':
      component=<Tutorials/>;
      footer = false;
      break;
}
  return (
    <div className="App">
      <Navbar></Navbar>
      {component}
      {footer ? <Footer/> : null}
    </div>
  );
}

export default App;
