import React, { Component } from 'react';

const food = [
  {
    id:1,
    name: "kimchi",
    image: "https://search.naver.com/search.naver?where=image&sm=tab_jum&query=%EA%B9%80%EC%B9%98#.jpg"
  },
  {
    id:2,
    name: "hamburger",
    image: "https://blog.naver.com/ddrddr220/220366357767.jpg"
  },
  {
    id:3,
    name: "불고기",
    image: "https://image.shutterstock.com/image-photo/beautiful-orange-red-autumn-forest-600w-464920574.jpg"
  }
];


//함수형 component
function Food({name, image}) {
  return (
    <>
      <h1>i like {name}</h1>
      <img src={image}></img>
    </>
  );
}
function renderFood(food){
  console.log(food)
  return <Food name={food.name} image={food.image} key={food.id}/>
}


function App() {
  return (
    <div className="App">
      <h2>hello</h2>
      {food.map(renderFood)}
    </div>
  );
}

export default App;
