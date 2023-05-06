import React, { Component } from 'react'
import ladger from '../../../assets/ladger.png'
import trust from '../../../assets/trust.png'
import meta from '../../../assets/meta.png'

export class Types extends Component {
  state = {clicked : false};

  handleClick = () =>{
    this.setState({clicked : !this.state.clicked})
  };

  show = () => {
    return(
      <div className='show'>
        <p>There are several types of crypto wallets, each with its own features, benefits, and drawbacks. Here are the most common types:</p>
        <p><b>Hardware Wallets</b>: A hardware wallet is a physical device that stores your private keys offline. It's considered one of the most secure types of wallets since it's not connected to the internet.</p>
        <img src={ladger} alt="ledger" />
        <p><b>Software Wallets</b>: A software wallet is an application that can be downloaded and installed on your computer or mobile device. They can be either hot or cold wallets depending on whether they are connected to the internet or not.</p>
        <img src={trust} alt="trust" />
        <p><b>Web Wallets</b>: A web wallet is a web-based wallet that allows you to access your cryptocurrencies from anywhere using a web browser. They are the easiest type of wallet to set up and use.</p>
        <img src={meta} alt="metamask" />
        <p>Whole list of all wallets with their ranking you can find in this <a href="https://www.g2.com/categories/cryptocurrency-wallets">list</a></p>
      </div>
    )
  }

  render() {
    return (
      <div className='body'>
        <h1 className='tracking-in-expand gradient__text'>Types of wallets <i className={this.state.clicked?"fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={this.handleClick}></i></h1>
        {this.state.clicked===true ? <this.show/> : null}
      </div>
    )
  }
}

export default Types