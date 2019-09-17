import React, { Component } from 'react';
import PropTypes from 'prop-types';



const food = [
  {
    id: 1,
    name: "kimchi",
    image: "https://ohyena.files.wordpress.com/2015/02/ec8aa4ed81aceba6b0ec83b7-2015-02-23-21-38-58.png",
    rating: 4.0
  },
  {
    id: 2,
    name: "bulgogi",
    image: "http://recipe1.ezmember.co.kr/cache/recipe/2015/04/18/c2aac4feb7c5fe07b8d118311cc8141a1.jpg",
    rating: 3.0
  },
  {
    id: 3,
    name: "hamburger",
    image: "https://en.pimg.jp/027/019/965/1/27019965.jpg",
    rating: 4.0
  },
  {
    id: 4,
    name: "maddu",
    image: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Furuma.co.kr%2Fskin%2Fupload%2Fmenu_5_1.jpg&f=1&nofb=1",
    rating: 2.0
  },
]

function Food({ name, image, rating }) {
  return (
    <div>
      <h2>이 음식은 {name}</h2>
      <img src={image} alt={name}></img>
      <p>점수는 {rating}/5.0</p>

    </div>
  );
}
Food.propTypes={
  name:PropTypes.string.isRequired
}

class App extends Component {
  state = {
    count: 0,
    count2: 1000
  };

  add = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  minus = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  hadd = () => {
    this.setState({
      count2: this.state.count2 + 100
    })
  }
  hminus = () =>{
    this.setState({
      count2:this.state.count2 - 100
    })
    
  }
  render() {
    return (
      <>
        <div>
          <div>The number :  {this.state.count}</div>
          <button onClick={this.add}>+</button>
          <button onClick={this.minus}>-</button>
        </div>

        <div>
          <div>the nubmer2 : {this.state.count2}</div>
          <button onClick={this.hadd}>100 + </button>
          <button onClick={this.hminus}>100 - </button>
        </div>

        <div>
          {food.map((value) => {
            return <Food name={value.name} image={value.imgae} rating={value.rating} key={value.id} />
          })}
        </div>
      </>
    );
  }
}


export default App;
