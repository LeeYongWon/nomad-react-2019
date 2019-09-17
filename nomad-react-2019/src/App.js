import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props)
    console.log('constructor')
  }
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
  componentDidMount(){
    console.log('componentDidMount render가 일어난 뒤에 일어난다.')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate state의 상태가 바뀌고 render가 실행되고 실행된다.');
  }
  componentWillUnmount(){
    console.log('goodbye')
  }
  render() {
    console.log('render')
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
