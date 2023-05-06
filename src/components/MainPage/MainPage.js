import React, {Component} from "react";
import './MainPage.css';
import network from '../../assets/network.png'


class MainPage extends Component{
  handleClick = () =>{
    window.location.replace('/intro')
  };
  render(){ return (
    <div className="main__body gradient__bg">
      <div className="main__body-content section__margin">
          <h1 className="gradient__text tracking-in-expand">Welcome to the Web3Study!</h1>
          <p>The free web 3 educational portal designed to provide users with comprehensive and accessible resources to learn about web 3.0 technologies, such as blockchain, decentralized applications, smart contracts, and cryptocurrencies. This educational portal offers a range of materials. The platform aims to cater to a wide range of learners, from beginners to experts, and provide a step-by-step learning experience for those interested in exploring the emerging world of web 3.0.</p>
          <div className="main__body-btn tracking-in-expand">
          <button onClick={this.handleClick}>Get started!</button>
        </div>
        </div>
        <div className="main__body_image">
          <img src={network} alt="network" />
        </div>  
        <div>
        </div>  
    </div>
  )
}
}

export default MainPage;