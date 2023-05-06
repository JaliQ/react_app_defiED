import React, { Component } from 'react'
import './whatis.css';

export class Consensus extends Component {
  render() {
    return (
      <div className='section__margin whatis' id='consensus'>
        <h1 className='tracking-in-expand gradient__text'>Consensun Algorythms</h1>
        <p>Consensus algorithms are a critical component of blockchain technology. They enable multiple parties to agree on a single version of the truth without the need for a central authority. In this article, we will discuss some of the most commonly used consensus algorithms in blockchains and provide simple examples to help you understand how they work.</p>
        <div className='whatis-olsus'>
        <ul>
          <li className='whatis-tagsus'>1)Proof of Work (PoW)<i class="fa-solid fa-person-digging"></i></li>
          <li>  Proof of Work is the original consensus algorithm used by Bitcoin and many other cryptocurrencies. It requires miners to solve a complex mathematical puzzle to create a new block and earn the associated rewards. The first miner to solve the puzzle broadcasts the solution to the network, and other miners verify it. If it is correct, the new block is added to the blockchain. This process is repeated every ten minutes on average.</li>
          <li>  For example, let's say that a miner wants to create a new block. They must first gather all the transactions that they want to include in the block. They then use their computer's processing power to solve a complex mathematical puzzle. The first miner to solve the puzzle broadcasts the solution to the network, and other miners verify it. If it is correct, the new block is added to the blockchain.</li>
          <li className='whatis-tagsus'>2)Proof of Stake (PoS)<i class="fa-solid fa-vault"></i></li>
          <li>  Proof of Stake is a newer consensus algorithm that is used by many cryptocurrencies, including Ethereum. In this algorithm, validators (rather than miners) are responsible for creating new blocks. Validators are chosen based on the number of coins they hold. The more coins they hold, the more likely they are to be selected to create a new block. Validators are incentivized to act in the best interest of the network, as they could lose their stake if they behave maliciously.</li>
          <li>  For example, let's say that a validator wants to create a new block. They must first gather all the transactions that they want to include in the block. They then use their stake (i.e., the number of coins they hold) to create the new block. If the block is accepted by the network, the validator is rewarded with transaction fees.</li>
          <li className='whatis-tagsus'>3)Delegated Proof of Stake (DPoS)<i class="fa-solid fa-people-group"></i></li>
          <li>Delegated Proof of Stake is a variation of Proof of Stake that is used by some cryptocurrencies, including EOS. In DPoS, token holders elect a group of delegates who are responsible for creating new blocks. Delegates are chosen based on the number of votes they receive from token holders. Delegates are incentivized to act in the best interest of the network, as they could lose their position if they behave maliciously.</li>
          <li>  For example, let's say that a delegate wants to create a new block. They must first gather all the transactions that they want to include in the block. They then use their computer's processing power to create the new block. If the block is accepted by the network, the delegate is rewarded with transaction fees.</li>
          <li className='whatis-tagsus'>4)Proof of Authority (PoA)<i class="fa-solid fa-chess-king"></i></li>
          <li>  Proof of Authority is a consensus algorithm that is used by some private blockchains. In this algorithm, a group of authorized validators is responsible for creating new blocks. Validators are selected based on their reputation and their willingness to act in the best interest of the network. Validators are incentivized to act honestly, as their reputation is at stake.</li>
          <li>  For example, let's say that a validator wants to create a new block. They must first gather all the transactions that they want to include in the block. They then use their authority (i.e., their reputation) to create the new block. If the block is accepted by the network, the validator is rewarded with transaction fees.</li>
        </ul>
        </div>
        <p>In conclusion, consensus algorithms are a critical component of blockchain technology. They enable multiple parties to agree on a single version of the truth without the need for a central authority. There are several different consensus algorithms used by blockchains, each with its own strengths and weaknesses. By understanding how these algorithms work</p>
      </div>
    )
  }
}

export default Consensus