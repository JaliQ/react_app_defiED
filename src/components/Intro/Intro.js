import React, {Component} from "react";
import Header from "./Header";
import './Intro.css';
import {WhatIs} from './Sections/whatIs';
import Hack from './Sections/hack';
import Price from './Sections/price';
import Bitcoin from './Sections/bitcoin';
import Consensus from './Sections/consensus';

class Intro extends Component{
  render(){ return (
    <div className="main">
     <Header/>
     <WhatIs/>
     <Consensus/>
     <Bitcoin/>
     <Hack/>
     <Price/>  
    </div>
  )
}
}

export default Intro;