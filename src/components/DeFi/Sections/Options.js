import React, { Component } from 'react'
import './defi.css'

export class Options extends Component {
  handleClick = (route) =>{
    window.location.href = `./defi/${route}`
  }

  render() {
    return (
      <div className='menu-options'>
        <button className='option' onClick={() => this.handleClick('tools')}>
          <i class="fa-solid fa-screwdriver-wrench"></i>
          <h1>Tools</h1>
        </button>
        <button className='option' onClick={() => this.handleClick('tutorials')}>
        <i class="fa-solid fa-book"></i>
          <h1>Tutorials</h1>
        </button>
      </div>
    )
  }
}

export default Options