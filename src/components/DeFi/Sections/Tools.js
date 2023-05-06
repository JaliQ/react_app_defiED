import React, { Component } from 'react'
import inch from '../../../assets/1inch.png'
import sushi from '../../../assets/sushi.png'
import uni from '../../../assets/uniswap-uni-logo.png'
import joe from '../../../assets/joe.png'
import gmx from '../../../assets/gmx.png'
import aave from '../../../assets/aave.png'
import compound from '../../../assets/compound.png'
import bastion from '../../../assets/bastion.png'
import aurigami from '../../../assets/aurigami.png'
import star from '../../../assets/star.png'
import bungee from '../../../assets/bungee.svg'
import llama from '../../../assets/llama.png'
import './defi.css'

export class Tools extends Component {
state = {first : false,second : false, third : false, fourth : false};

handleClick = (value) =>{
  switch(value){
    case '1':
      this.setState({first : !this.state.first});
      break;
    case '2':
      this.setState({second : !this.state.second});
      break;
    case '3':
      this.setState({third : !this.state.third});
      break;
    case '4':
      this.setState({fourth : !this.state.fourth});
      break;
    default:
      break;
  }

}

ShowExchanges = () =>{
  return(
    <div className='menu_crt'>
      <div className='object'>
        <img src={inch} alt="1inch" />
        <a href="https://app.1inch.io/#/43114/simple/swap/AVAX/USDT.e">1inch</a>
      </div>
      <div className='object'>
        <img src={sushi} alt="sushi" />
        <a href="https://www.sushi.com/swap">SushiSwap</a>
      </div>
      <div className='object'>
        <img src={joe} alt="joe" />
        <a href="https://traderjoexyz.com/avalanche">TraderJoe</a>
      </div>
      <div className='object'>
        <img src={uni} alt="uni"  />
        <a href="https://app.uniswap.org/">UniSwap</a>
      </div>
      <div className='object'>
        <img src={gmx} alt="gmx" />
        <a href="https://app.gmx.io/#/trade">GMX</a>
      </div>
    </div>
  )
}

ShowLandings = () =>{
  return(
    <div className='menu_crt'>
      <div className='object'>
        <img src={aave} alt="aave" />
        <a href="https://app.aave.com/">AAVE</a>
      </div>
      <div className='object'>
        <img src={compound} alt="compound" />
        <a href="https://app.compound.finance/?market=usdc-mainnet">Compound</a>
      </div>
      <div className='object'>
        <img src={aurigami} alt="aurigami" />
        <a href="https://app.aurigami.finance/market">Aurigami</a>
      </div>
      <div className='object'>
        <img src={bastion} alt="bastion" />
        <a href="https://app.bastionprotocol.com/">Bastion</a>
      </div>
    </div>
  )
}

ShowBridges = () =>{
  return(
    <div className='menu_crt'>
      <div className='object'>
        <img src={star} alt="star" />
        <a href="https://stargate.finance/transfer">Stargate</a>
      </div>
      <div className='object'>
        <img src='https://3757759239-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FUdcg2zIVro9DItOfrezt%2Ficon%2F5OTzC3fjscHIvkBqqmEC%2Fc-256-color%403x.png?alt=media&token=55e6a89d-3754-49e9-b93d-27136ad43635' alt="multichain" />
        <a href="https://app.multichain.org/#/router">Multichain</a>
      </div>
      <div className='object'>
        <img src={bungee} alt="bungee" />
        <a href="https://www.bungee.exchange/">Bungee</a>
      </div>
    </div>
  )
}

ShowMon = () =>{
  return(
    <div className='menu_crt'>
      <div className='object'>
        <img src='https://1000logos.net/wp-content/uploads/2022/03/CoinMarketCap-logo.png' alt="coinmark" />
        <a href="https://coinmarketcap.com/">Coinmarket cap</a>
      </div>
      <div className='object'>
        <img src='https://image.pitchbook.com/GWlleVJjd5yWt7atSTlDoZKQkNP1677492764075_200x200' alt="revert" />
        <a href="https://revert.finance/">Revert</a>
      </div>
      <div className='object'>
        <img src={llama} alt="llama" />
        <a href="https://defillama.com/">DeFiLlama</a>
      </div>
      <div className='object'>
        <img src='https://uniswap.fish/logo-only-fish.png' alt="unifish" />
        <a href="https://uniswap.fish/?network=ethereum">UniSwap.fish</a>
      </div>
    </div>
  )
}

  render() {
    return (
      <div className='body'>
        <h1 className='gradient__text'>Tools</h1>
        <h1 >Exchanges <i className={this.state.first?"fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={() => this.handleClick('1')}></i></h1>
        {this.state.first===true ? 
        <this.ShowExchanges></this.ShowExchanges>
        : null}
        <h1 >Landing Markets <i className={this.state.second?"fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={() => this.handleClick('2')}></i></h1>
        {this.state.second===true ? 
        <this.ShowLandings></this.ShowLandings>
        : null}
        <h1 >Bridges <i className={this.state.third?"fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={() => this.handleClick('3')}></i></h1>
        {this.state.third===true ? 
        <this.ShowBridges></this.ShowBridges>
        : null}
        <h1 >Monitoring <i className={this.state.fourth?"fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={() => this.handleClick('4')}></i></h1>
        {this.state.fourth===true ? 
        <this.ShowMon></this.ShowMon>
        : null}
      </div>
    )
  }
}

export default Tools