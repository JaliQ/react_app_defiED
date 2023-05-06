import React, { Component } from 'react'
import './sections.css'
import { Icon } from '@iconify/react';

export class Net extends Component {
  render() {
    return (
      <div className='boddy' id='networks'>
        <h1 className='tracking-in-expand gradient__text'>Networks</h1>
       <p>Blockchain technology is one of the most revolutionary innovations of the modern age. It has the potential to transform numerous industries, including finance, healthcare, supply chain, and more. At its core, blockchain is a decentralized, digital ledger that records transactions in a secure and transparent manner. The technology has gained widespread attention due to its ability to provide trust, security, and accountability without the need for intermediaries. Blockchain networks are constantly evolving, with new platforms and protocols being developed to address specific use cases and challenges. In this part, we will explore some of the most prominent blockchain networks and their unique features. Let's look on the most popular blockchain networks:</p>
      <div className='body-list'>
      <div className='body-title'>
      <Icon icon="logos:bitcoin" width="40" height="40" />
      <h1>Bitcoin</h1>
      </div>
      <p>Bitcoin is the first and most well-known blockchain network, and it has been in operation since 2009. Its decentralized nature and security features have made it a popular choice for investors and users alike. Bitcoin's blockchain is public and transparent, which means anyone can view transactions on the network. However, it also means that transactions are pseudonymous, meaning that users can remain anonymous if they choose.</p>
      <div className='body-title'>
      <Icon icon="logos:ethereum" width="40" height="40" />
      <h1>Ethereum</h1>
      </div>
      <p>Ethereum is a blockchain network that was created in 2015 by Vitalik Buterin. It is known for its ability to support smart contracts, which are self-executing contracts that can automate the transfer of assets and other functions. Ethereum's blockchain is also public and transparent, and the network has become a hub for decentralized applications (dApps) and other blockchain-based services.</p>
      <div className='body-title'>
      <Icon icon="mingcute:binance-coin-bnb-fill" color="yellow" width="40" height="40" />
      <h1>Binance Smart Chain</h1>
      </div>
      <p>Binance Smart Chain (BSC) is a blockchain network that was launched in 2020 by Binance, one of the largest cryptocurrency exchanges in the world. BSC is designed to be highly compatible with the Ethereum ecosystem, which means that Ethereum developers can easily migrate their dApps and smart contracts to BSC. BSC's hybrid consensus algorithm allows for fast transaction times and low fees, making it an attractive option for DeFi applications.</p>
      <div className='body-title'>
      <Icon icon="simple-icons:polkadot" width="40" height="40" />
      <h1>Polkadot</h1>
      </div>
      <p>Polkadot is a blockchain network that was created in 2016 by Gavin Wood, one of the co-founders of Ethereum. Polkadot's main innovation is its ability to connect different blockchain networks through "parachains," which are specialized blockchains that can communicate with other parachains and the Polkadot relay chain. This allows for interoperability between different blockchain networks, which is a major challenge in the blockchain industry.</p>
      <div className='body-title'>
      <Icon icon="cryptocurrency-color:avax" width="40" height="40" />
      <h1>Avalance</h1>
      </div>
      <p>Avalanche (AVAX) is a blockchain network that aims to offer faster transaction speeds and higher throughput than other blockchains. It uses a consensus algorithm called Avalanche, which allows for parallel processing of transactions, leading to increased scalability. AVAX also features a sub-network of interoperable blockchains called "subnets," which can be used for different purposes and customized to specific needs. The network is gaining popularity in the DeFi space, with numerous protocols launching on the platform.</p>
      <div className='body-title'>
      <Icon icon="cryptocurrency-color:matic" width="40" height="40" />
      <h1>Polygon</h1>
      </div>
      <p>Polygon (MATIC), formerly known as Matic Network, is a Layer 2 scaling solution for Ethereum. It aims to increase transaction speeds and reduce fees on the Ethereum network by using sidechains that are secured by the Ethereum mainnet. MATIC also features a number of tools and services for developers, including a wallet, explorer, and infrastructure services. The network has gained popularity in the gaming and NFT spaces, with numerous projects launching on the platform.</p>
      </div>
       <p>Every blockchain has it's transactions which you can see with special websites. For example, all transactions on Ethereum network are displayed on <a href='https://etherscan.io/'>Etherscan</a>.</p>
      </div>
    )
  }
}

export default Net