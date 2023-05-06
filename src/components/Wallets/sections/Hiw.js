import React, { Component } from 'react'
import keys from '../../../assets/keys.png'
import crypt from '../../../assets/crypt.png'

export class Hiw extends Component {
  state = {clicked : false};

  handleClick = () =>{
    this.setState({clicked : !this.state.clicked})
  };

  ShowKey = () => {
    return(
      <div className='show'>
        <p>All crypto wallets are using 2 keys for transaction using basic asymmetric encryption:</p>
        <img src={crypt} alt="crypt" />
        <p>When you are creating your wallet you are creating <b id='private'>Private key</b>. The private key is to a crypto wallet similar to what an ATM PIN or Online Banking TAN is to a bank account. Every wallet has one or multiple unique private keys. It is only known to the wallet owner and used to prove he rightfully owns the account and contained funds and can send transactions.</p>
        <p>The <b>public key</b> of a crypto wallet is derived from the corresponding private key using a mathematical function known as “elliptic curve multiplication”. Digital assets and crypto funds are stored in, or rather assigned to, a wallet address. A wallet address can be likened to a bank account number/IBAN. The wallet address can be shared with another person and is used to receive transfers of digital assets there. </p>
        <p>The <b>wallet address</b> is mathematically derived from the wallet’s public key through a one-way function called “hashing”. The wallet address is a shorter representation of the public key’s final part and usually has a length of 160 bits. On the scheme below you can see how it works:</p>
        <img src={keys} alt="keys" />
        <p className='source'>Source: bitcoinbook/ch04.asciidoc at develop · bitcoinbook/bitcoinbook (github.com) </p>
        <p>The most important part is <b>Secret phrase</b>. If a user was to lose (and/or forget) the private key to his wallet, he could no longer access, manage or send the funds contained within the wallet. In short, the funds would irretrievably be lost. To avoid this from happening, there is a backup mechanism built into crypto wallets called the secret phrase (sometimes also referred to as mnemonic phrase, backup seed, recovery phrase).</p>
        <p>A secret phrase is a collection of 12-24 words that store all the information required to recover and access all the funds of a crypto wallet. It can be used to derive the private key of the wallet as a secret phrase is a representation of the random number your private key is. Example of the secret phrase:</p>
        <p>green speak enact torch type series hunt start black oven captain budget</p>
      </div>
    )
  }

  render() {
    return (
      <div className='body'>
        <h1 className='tracking-in-expand gradient__text'>How it works <i className={this.state.clicked?"fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={this.handleClick}></i></h1>
        {this.state.clicked===true ? 
        <this.ShowKey></this.ShowKey>
        : null}
      </div>
    )
  }
}

export default Hiw