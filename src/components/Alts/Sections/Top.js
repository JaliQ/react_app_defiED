import React, { Component } from 'react'
import './sections.css'
import top from '../../../assets/top.PNG'
import desc from '../../../assets/desc.png'


export class Top extends Component {
  render() {
    return (
      <div className='boddy' id='top'>
          <h1 className='tracking-in-expand gradient__text'>Top altcoins</h1>
          <p>You already know a lot about cryptocurrencies and blockchains. There are a lot of different projects arount the net. Every year new blockchains and projects appearing. The best tool to monitor all crypto market is <a href="https://coinmarketcap.com/">Coinmarketcap</a>.</p>
          <p>If you will scroll down on the main page you will see a list of cryptocurrencies with the biggest market capitalization. This is the most reliable and well-developed crypto projects</p>
          <div className='top'>
          <img src={top} alt="top" />
          <p>Now, lets figure out how to find important information for your research. When you fount project you are interested in, click on it. You will be on project page.</p>
          <img src={desc} alt="desc"/>
          <p>Let's watch on the most important information. Number 1 is the type of cryptocurrency Coin(Altcoin)/Token. This factor is really important because Coins are usualy more complicated projects. Number 2 is <b>Whitelist</b>. Whitelist is a project description for the investors where developers are explaining the purpose of the project and what they have already achieved. For the number 3 we have trading volume on DEX(Decentralized Exchange) and CEX(Centralized Exchange). This information is important to prevent scam projects. If you see that your cryptocurrencyhas a high price but very low volume you have to become attentive. Other information here won't that useful for common investor.</p>
          <p>Below you will see charts. But most people prefer <a href="http://tradingview.com">tradingview</a> to invistigate the charts because it has more tools.</p>
          <p>Under the charts you will find the most important information - description of the project based on the whitelists collected by the coinmarketcap. All the information you would need will be there.</p>
          </div>
      </div>
      
    )
  }
}

export default Top