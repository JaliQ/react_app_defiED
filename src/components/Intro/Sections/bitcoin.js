import React, { Component } from 'react';
import './whatis.css';
import bitcoin from '../../../assets/bitcoin.jpeg'

export class Bitcoin extends Component {
  render() {
    return (
      <div className='section__margin whatis' id='bitcoin'>
        <h1 className='tracking-in-expand gradient__text'>About bitcoin</h1>
        <div className='whatis-bc'>
        <p>The idea of a decentralized digital currency had been around for decades before Bitcoin was created. However, it was not until the release of the Bitcoin white paper in 2008 that a practical solution was proposed. The white paper outlined a new system of peer-to-peer electronic cash that would enable secure and anonymous transactions without the need for a central authority. Bitcoin was launched in January 2009, and it quickly gained popularity among the early adopters of cryptocurrency. Today, Bitcoin is widely accepted by merchants and individuals around the world.</p>
        <p>The purpose of Bitcoin is to create a decentralized and secure form of digital currency that can be used for transactions between individuals and businesses. Bitcoin is designed to be resistant to censorship and control by governments and central banks. Transactions are verified and recorded on a public ledger called the blockchain, which is maintained by a network of computers around the world. Bitcoin also offers the advantage of being able to send and receive money quickly and inexpensively without the need for intermediaries such as banks.</p>
        <img src={bitcoin} alt="bitcoin" />
        <p>Bitcoin offers several advantages over traditional forms of currency. First, it is decentralized, which means that it is not controlled by a central authority such as a government or a central bank. This makes it resistant to censorship and control by governments. Second, Bitcoin transactions are secure and anonymous, which means that they cannot be easily traced back to the parties involved. Third, Bitcoin transactions are fast and inexpensive compared to traditional methods of sending and receiving money. Fourth, Bitcoin is a deflationary currency, which means that the supply is limited and it becomes more valuable over time.</p>
        </div>
        <p>Bitcoin halving is a process that occurs approximately every four years in which the reward for mining new blocks is reduced by half. The purpose of halving is to limit the supply of new bitcoins that are introduced into circulation, which helps to maintain the scarcity of the currency. This scarcity is one of the factors that contributes to the increasing value of Bitcoin over time. The most recent halving occurred in May 2020, and the next halving is expected to occur in 2024.</p>
        <p>Bitcoin is a decentralized digital currency that is designed to offer secure and anonymous transactions between individuals and businesses. It has several advantages over traditional forms of currency, including its decentralized nature, security, and speed. The process of halving helps to maintain the scarcity of Bitcoin and contributes to its increasing value over time. As the popularity of Bitcoin and other cryptocurrencies continues to grow, it is likely that they will play an increasingly important role in the global economy.</p>
      
      </div>
    )
  }
}

export default Bitcoin