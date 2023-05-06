import React, {Component} from "react";
import './Header.css'

class Header extends Component{
  render(){ return (
    <div className="intro-body">
      <h1 className="intro-body-text tracking-in-expand">Introduction</h1>
      <div className="intro-body-items">
      <ul className="intro-body-ul">
        <li className="intro-body-item"><a href="#whatIs"><i class="fa-solid fa-check"></i>What is Blockchain</a> </li>
        <li className="intro-body-item"><a href="#consensus"><i class="fa-solid fa-check"></i>Consensus Algorythms</a></li>
        <li className="intro-body-item"><a href="#bitcoin"><i class="fa-solid fa-check"></i>How Bitcoin works</a></li>
        <li className="intro-body-item"><a href="#hack"><i class="fa-solid fa-check"></i>Possiblities to hack blockchain</a></li>
        <li className="intro-body-item"><a href="#price"><i class="fa-solid fa-check"></i>Price & Purpose</a></li>
      </ul>
      </div>
    </div>
  )
}
}

export default Header;