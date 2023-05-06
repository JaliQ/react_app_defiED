import React, {Component} from "react";
import './alt_header.css'
import atom from '../../assets/atom.png';
import matic from '../../assets/matic.png';
import sol from '../../assets/sol.png';
import ether from '../../assets/ether.png';
import avax from '../../assets/avax.png';
import pht from '../../assets/pht.png';
import aave from '../../assets/aave.png';

class Header extends Component{
  render(){ return (
    <div className="intro-body">
      <h1 className="intro-body-text puff-in-center">Altcoins and Tokens</h1>
      <div className="intro-body-items">
      <div className="intro-body-logos">
     <img src={avax} alt="avax"  className="puff-in-center"/>
      <img src={sol} alt="sol" className="puff-in-center"/>
      <img src={matic} alt="matic" className="puff-in-center"/>
      <img src={ether} alt="ether" className="puff-in-center"/>
      <img src={atom} alt="atom" className="puff-in-center"/>
      <img src={pht} alt="pht" className="puff-in-center"/>
      <img src={aave} alt="aave"aclassName="puff-in-center"/>
      </div>   
      <ul className="intro-body-ul">
        <li className="intro-body-item"><a href="#networks"><i class="fa-solid fa-check"></i>Networks</a> </li>
        <li className="intro-body-item"><a href="#alts"><i class="fa-solid fa-check"></i>Altcoins</a></li>
        <li className="intro-body-item"><a href="#tokens"><i class="fa-solid fa-check"></i>Tokens</a></li>
        <li className="intro-body-item"><a href="#top"><i class="fa-solid fa-check"></i>Top altcoins</a></li>
        <li className="intro-body-item"><a href="#video"><i class="fa-solid fa-check"></i>Video Summary</a></li>
      </ul>
      </div>
    </div>
  )
}
}

export default Header;