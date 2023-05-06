import React, { Component } from 'react'

export class Vid extends Component {
  state = {clicked : false};

  handleClick = () =>{
    this.setState({clicked : !this.state.clicked})
  };

  show = () => {
    return(
      <iframe width="560" height="315" src="https://www.youtube.com/embed/I-pXgFJfhc4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    )
  }


  render() {
    return (
      <div className='body'>
        <h1 className='tracking-in-expand gradient__text'>Video Summary & Setting up example <i className={this.state.clicked?"fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={this.handleClick}></i></h1>  
        {this.state.clicked===true ? <this.show></this.show> : null}
      </div>
    )
  }
}

export default Vid