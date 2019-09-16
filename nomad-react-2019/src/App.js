import React, { Component } from 'react';
import PropTypes from 'prop-types';




class App extends Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState({
      count:this.state.count+1
    })
  }
  minus = () =>{
    this.setState({
      count:this.state.count-1
    })
  }
  render() {
    return (
      <div>
        <div>The number :  {this.state.count}</div>
        <button onClick={this.add}>+</button>

        <button onClick={this.minus}>-</button>
      </div>
    );
  }
}


export default App;
