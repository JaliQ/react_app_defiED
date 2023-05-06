import React, { Component } from 'react'
import './sections.css'

export class Video extends Component {
  render() {
    return (
      <div className='boddy' id='video'>
        <h1 className='tracking-in-expand gradient__text'>Video guide</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VGjG-LDQ3YQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    )
  }
}

export default Video