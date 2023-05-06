import React, { Component, useState } from 'react';
import './whatis.css';
import sha256 from 'js-sha256';
import block from '../../../assets/block.jpg';


function InputDisplay() {
  const [inputValue, setInputValue] = useState("");
  const [hashValue, setHashValue] = useState("");

  function handleInputChange(event) {
    const value = event.target.value;
    setInputValue(value);
    setHashValue(sha256(value));
  }
  return (
    <div className='whatis-sha256'>
      <label htmlFor="input1">Enter a value:</label>
      <input type="text" id="input1" value={inputValue} onChange={handleInputChange} />
      <label htmlFor="input2">Your SHA-256 value:</label>
      <input type="text" id="input2" value={hashValue} />
    </div>
  );
}

export class WhatIs extends Component {

  render() {
    return (
      <div className='whatis section__margin' id='whatIs'>
        <h1 className='whatis-header gradient__text tracking-in-expand'>What is blockchain?</h1>
        <p className='whatis-text'>To understand what blockchain is, let's start from the hashisng algorytms and how they are related to the crypto world.</p>
        <p className='whatis-text'>Hashing is a process of transforming input data into a fixed-size output, usually a sequence of digits and letters. Hash functions are used in various fields such as data storage, computer networking, and cryptography. In the crypto world, hashing plays a critical role in ensuring the integrity and security of data.</p>
        <p className='whatis-text'>Hashing is often used to create digital fingerprints or unique identifiers for data, files, and messages. A hash function takes an input message of any length and generates a fixed-size output called a hash code, hash value, or simply a hash. The hash code is usually represented as a string of letters and numbers.</p>
        <p className='whatis-text'>Hashing is a one-way function, which means that it's easy to compute the hash value for any given input, but it's virtually impossible to generate the original input from the hash code. This property makes hashing useful in many applications, such as password storage and message authentication.</p>
        <p className='whatis-text'>In the crypto world, hashing is used extensively to ensure the security and authenticity of digital assets. For example, cryptocurrencies such as Bitcoin and Ethereum use hashing to create unique identifiers for transactions and blocks in the blockchain. The blockchain is a distributed ledger that records all the transactions in the network in a secure and immutable way. Each block in the blockchain contains a hash code that serves as a unique identifier for that block.</p>
        <p className='whatis-text'>Thare are a lot of different types of hashing algorytms. For example, let's look at the most popular one which is SHA256:</p>
          <InputDisplay/>
        <p className='whatis-text'>Blockchain is a revolutionary technology that has the potential to transform the way we conduct transactions and store data online. It is a decentralized, distributed ledger that uses cryptography to secure and verify transactions across a network of computers.</p>
        <p className='whatis-text'>At its core, blockchain is a series of blocks that are linked together in a chain. Each block contains a set of data, a number in the chain, a nonce(if proof-of-work), and a unique cryptographic hash of the previous block. This creates an unbreakable chain of data that is resistant to tampering or alteration.</p>
        <div className='whatis-img'>
         <img src={block} alt="block" />
          <p>example of the first block from <a href='https://andersbrownworth.com/blockchain/'>https://andersbrownworth.com/blockchain/</a></p>
        </div>
        <p className='whatis-text'>The most well-known application of blockchain is in cryptocurrency, such as Bitcoin and Ethereum. In these networks, users can send and receive digital currency without the need for a centralized intermediary like a bank. Instead, transactions are verified and recorded by the blockchain network, and users can access their funds using a <a href='/wallets#private'>private key</a>.</p>
        <p className='whatis-text'>However, blockchain has applications beyond cryptocurrency as well. It can be used to store and verify any type of data, from medical records to supply chain information. Because of its decentralized and secure nature, blockchain has the potential to transform a wide range of industries, including finance, healthcare, and logistics.</p>
        <p className='whatis-text'>One of the key advantages of blockchain is its transparency. Because all transactions on the blockchain are public, anyone can view the data and verify its authenticity. This makes it an ideal tool for creating trust and accountability in industries where transparency is important, such as finance and government.</p>
        <p className='whatis-text'>Overall, blockchain is a powerful technology with the potential to transform the way we store and share data online. By providing a secure, decentralized platform for transactions and data storage, blockchain has the potential to create a more transparent, efficient, and trustworthy world.</p>
      </div>
    )
  }
}

export default WhatIs;