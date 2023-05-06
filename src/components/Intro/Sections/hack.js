import React, { Component } from 'react';
import './whatis.css';

export class Hack extends Component {
  state = {clicked1 : false, clicked2 : false,clicked3 : false,clicked4 : false,clicked5 : false,clicked6 : false,clicked7 : false,};

  handleClick1 = () =>{
    this.setState({clicked1 : !this.state.clicked1})
  };

  handleClick2 = () =>{
    this.setState({clicked2 : !this.state.clicked2})
  };

  handleClick3 = () =>{
    this.setState({clicked3 : !this.state.clicked3})
  };

  handleClick4 = () =>{
    this.setState({clicked4 : !this.state.clicked4})
  };

  handleClick5 = () =>{
    this.setState({clicked5 : !this.state.clicked5})
  };

  handleClick6 = () =>{
    this.setState({clicked6 : !this.state.clicked6})
  };

  handleClick7 = () =>{
    this.setState({clicked7 : !this.state.clicked7})
  };

  render() {
    return (
      <div className='section__margin whatis' id='hack'>
        <h1 className='tracking-in-expand gradient__text'>Is it possible to hack blockchain?</h1>
        <p>The short answer is yes, it is technically possible to hack a blockchain, but the level of difficulty involved is incredibly high. This is due to the cryptographic protocols used to secure the blockchain, which are designed to make it nearly impossible to manipulate data on the chain. Each block in the chain contains a hash of the previous block, creating a chain of blocks that are linked together. If one block is changed, it would require the alteration of every subsequent block, which is an extremely difficult and computationally expensive task.</p>
        <p>One of the key features of blockchain technology is its decentralized nature. The blockchain is maintained by a network of nodes that work together to verify transactions and secure the chain. This means that there is no central point of failure, and the network is resilient to attacks.</p>
        <p>In the list below you can find the most popular attack methods:</p>
        <div className='whatis-hack'>
           <p>Attack 51% <i class={this.state.clicked1?"fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={this.handleClick1}></i></p>
           {
            this.state.clicked1? <p>A 51% attack involves controlling over 50% of the network's computing power, which allows an attacker to manipulate transactions and potentially double-spend coins. This type of attack is difficult to execute and requires a significant amount of resources, but it can be devastating to a blockchain network. The best way to prevent a 51% attack is to ensure that the network is decentralized and that no single entity controls a significant portion of the computing power.</p> : null
           }
        </div>
        <div className='whatis-hack2'>
           <p>Sybil Attack <i class={this.state.clicked2?"fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={this.handleClick2}></i></p>
           {
            this.state.clicked2? <p>A Sybil attack involves creating multiple fake identities or nodes on the network to gain control over a significant portion of the computing power. This can be used to disrupt the network or carry out other attacks. To prevent a Sybil attack, blockchain networks use consensus algorithms and other methods to ensure that nodes are genuine and that no single entity can control a disproportionate amount of the computing power.</p> : null
           }
        </div>
        <div className='whatis-hack3'>
           <p>Brute Force Attack <i class={this.state.clicked3?"fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={this.handleClick3}></i></p>
           {
            this.state.clicked3? <p>A brute force attack involves attempting to guess a private key or password through trial and error. This is typically ineffective due to the strength of the cryptographic protocols used to secure the blockchain. To protect against brute force attacks, it's important to use strong passwords and private keys that are not easily guessable.</p> : null
           }
        </div>
        <div className='whatis-hack4'>
           <p>Social Engineering <i class={this.state.clicked4?"fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={this.handleClick4}></i></p>
           {
            this.state.clicked4? <p>Social engineering involves tricking someone into revealing their private key or other sensitive information. This can be done through phishing scams, malware, or other methods. To prevent social engineering attacks, it's important to be cautious of unsolicited messages and emails and to never reveal private keys or other sensitive information.</p> : null
           }
        </div>
        <div className='whatis-hack4'>
           <p>DDoS Attack <i class={this.state.clicked5?"fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={this.handleClick5}></i></p>
           {
            this.state.clicked5? <p>A distributed denial-of-service (DDoS) attack involves flooding the network with traffic, which can overwhelm the nodes and disrupt the blockchain's operation.</p> : null
           }
        </div>
        <div className='whatis-hack4'>
           <p>Eclipse Attack <i class={this.state.clicked6?"fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={this.handleClick6}></i></p>
           {
            this.state.clicked6? <p>An eclipse attack involves isolating a node or group of nodes from the rest of the network, which can give an attacker control over the transactions that those nodes are processing.</p> : null
           }
        </div>
        <div className='whatis-hack4'>
           <p>Timejacking <i class={this.state.clicked7?"fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={this.handleClick7}></i></p>
           {
            this.state.clicked7? <p>Timejacking involves manipulating the timestamp on a block to make it appear as though it was created earlier than it actually was. This can be used to carry out a double-spend attack or other malicious activity.</p> : null
           }
        </div>
      </div>
    )
  }
}

export default Hack