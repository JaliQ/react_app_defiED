import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
  redirectToNextPage = () => {
  let pages = ['intro', 'alts', 'wallets', 'defi']
    var currentPageUrl = window.location.href.split('/').pop();
    currentPageUrl = currentPageUrl.split('#')[0]
    var index = pages.indexOf(currentPageUrl);
    var newUrl = pages[index+1];
    console.log(currentPageUrl)
    newUrl===undefined ? window.location.href = `/${currentPageUrl}` : window.location.href = `/${newUrl}`;
  }

  redirectToPreviousPage = () => {
    let pages = ['intro', 'alts', 
  'wallets', 'defi']
    const currentPageUrl = window.location.href.split('/').pop();
    var index = pages.indexOf(currentPageUrl);
    var newUrl = pages[index-1];
    window.location.href = `/${newUrl}`;
    newUrl===undefined ? window.location.href = `/${currentPageUrl}` : window.location.href = `/${newUrl}`;
  }

  render() {
    return (
      <div className='Footer'>
        <button onClick={this.redirectToPreviousPage}><i class="fa-solid fa-arrow-left"></i></button>
        <button onClick={this.redirectToNextPage}><i class="fa-solid fa-arrow-right"></i></button>
      </div>
    )
  }
}

export default Footer