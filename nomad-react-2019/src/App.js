import React, {Component} from 'react';

const food = [
  { korean: "kimchi" }, { america: "hamburger" }
]
//클래스형 component
class Potato2 extends Component{
  render(){
    return(
      <div>
        <h2>{this.props.korean}</h2>
        <h2>{this.props.america}</h2>
      </div>
    );
  }
}
//함수형 component
function Potato({korean, america}) {
  return (
    <>
      <h2>i like {korean}</h2>
      <h2>i like {america}</h2>
    </>
  );
}
//arrow function Component
const Potato3  = ({korean}) =>{
  return(
    <div>
      <h2>Arrow Function Component</h2>
      {korean}
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <h2>hello</h2>
      <Potato korean={food[0].korean} america={food[1].america} />
      <Potato2 korean={food[0].korean} america={food[1].america} />
      <Potato3 korean={food[0].korean} america={food[1].america} />
    </div>
  );
}

export default App;
