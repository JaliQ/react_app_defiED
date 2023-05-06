import React, {Component} from "react";
import Header from './sections/Header.js'
import Hiw from './sections/Hiw'
import Types from './sections/Types'
import Vid from './sections/Vid'


class Wallets extends Component{
  render(){ return (
    <div className="intro-body">
      <Header/>
      <Hiw></Hiw>
      <Types></Types>
      <Vid></Vid>
    </div>
  )
}
}

export default Wallets;