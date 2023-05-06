import React, { Component } from 'react'
import './sections.css'
import contract from'../../../assets/contract.png'

export class Tokens extends Component {
  render() {
    return (
      <div className='boddy' id='tokens'>
        <h1 className='tracking-in-expand gradient__text'>Tokens&Smart-Contacts</h1>
        <img src={contract} alt="contract" />
        <p>Smart contracts and tokens have become increasingly popular in recent years as the blockchain industry continues to grow. They are integral to many decentralized applications (dApps) and offer numerous advantages over traditional methods of executing transactions and contracts.</p>
        <p>A <b>smart contract</b> is a self-executing contract with the terms of the agreement directly written into code. Once the predetermined conditions are met, the contract automatically executes without the need for intermediaries, such as lawyers or notaries. Smart contracts are stored on a blockchain and are immutable, meaning that once they are executed, they cannot be altered or tampered with.</p>
        <p>Smart contracts are used in a variety of industries, including real estate, finance, and insurance, to execute transactions and enforce agreements. For example, in the real estate industry, a smart contract can be used to automatically transfer ownership of a property once the buyer has met the predetermined conditions, such as paying the full purchase price.</p>
        <p><b>Tokens</b> are digital assets that are created and managed using blockchain technology. They can represent anything from currency to assets, such as property or shares in a company. Tokens are created using smart contracts and are stored on a blockchain.</p>
        <p>Tokens can be used for a variety of purposes. For example:</p>
        <ul>
          <li>Utility tokens - used to access services or products on a platform or network.</li>
          <li>Security tokens - represent ownership in a company or asset, such as real estate or artwork.</li>
          <li>Governance tokens - used to participate in the decision-making process of a decentralized organization.</li>
        </ul>
        <p>Smart contracts and tokens have their advantages and disadvantages when it comes to their implementation and use. One of the key advantages of smart contracts is automation. Smart contracts can automate the execution of agreements, which reduces the need for intermediaries, saves time, and improves efficiency. Additionally, the transparency of the blockchain ledger provides visibility into the transaction history of tokens and the smart contract execution process, which enhances transparency. Another advantage of smart contracts and tokens is their security. They operate on a decentralized network, making them secure against attacks and fraud. Finally, smart contracts are programmable, allowing developers to customize them according to their specific needs, which enhances their versatility.</p>
        <p>On the other hand, there are some disadvantages to smart contracts and tokens as well. One potential disadvantage is the complexity of the programming language used to create them. Additionally, if a smart contract has a bug, it can lead to unforeseen consequences that could be costly to rectify. Furthermore, the lack of standardization in the development and implementation of smart contracts and tokens could lead to interoperability issues between different systems. Finally, the legal and regulatory landscape around smart contracts and tokens is still developing, which could pose challenges for their widespread adoption.</p>
        <p>An example of the token based on the Ethereum network is well-known Shiba-Inu. This token by itself has no purpose it was created just for fun. This is the reason why is costs less than 0.0001$. Well developed smart contracts work on their local tokens. So, if the contact has a lot of users price has infinite potential. As an example of such token you can make a research about UNI token.</p>    
      </div>
    )
  }
}

export default Tokens