import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    count: 0
  }

  add = () => {
    this.setState(current=>({
      count: current.count + 1
    }))
  }
  minus = () => {
    this.setState(current =>({
      count: this.state.count - 1
    }))
  }
  ex = ()=>{
    this.setState(current =>({
      count: current.count *2
    }))
  }
  divide = () =>{
    this.setState(current=>({
      count: current.count/2
    }))
  }
  zero = () =>{
    this.setState(current=>({
      count:current.count * 0
    }))
  }
  render() {
    return (
      <div>
        <h2>this number : {this.state.count} </h2>
        <button onClick={this.add}>plus</button>
        <button onClick={this.minus}>minus</button>
        <button onClick={this.ex}>*</button>
        <button onClick={this.divide}>/</button>
        <button onClick={this.zero}>초기값</button>
      </div>
    )
  }
}



export default App;
