import React, {Component} from "react";
import './Alts.css';
import Header from './alt_header.js';
import {Net} from './Sections/Net.js';
import {Al} from './Sections/Al.js';
import {Tokens} from './Sections/Tokens';
import {Top} from './Sections/Top.js';
import {Video} from './Sections/Video.js'

class Alts extends Component{
  render(){ return (
    <div className="intro-boddy">
      <Header/>
      <Net/>
      <Al/>
      <Tokens/>
      <Top/>
      <Video/>
    </div>
  )
}
}

export default Alts;