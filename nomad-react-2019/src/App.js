import React from 'react';
import PropTypes from 'prop-types';

const food = [
  {
    id:1,
    name: "kimchi",
    image: "https://image.shutterstock.com/image-photo/group-young-friends-having-fun-600w-287674133.jpg",
    rating:4.4
  },
  {
    id:2,
    name: "hamburger",
    image: "https://image.shutterstock.com/image-photo/young-girl-listening-music-headphones-600w-1189716400.jpg",
    rating:5.0
  },
  {
    id:3,
    name: "불고기",
    image: "https://image.shutterstock.com/image-photo/beautiful-orange-red-autumn-forest-600w-464920574.jpg",
    rating:3.2
  }
];


//함수형 component
function Food({name, image, rating}) {
  return (
    <>
      <h1>i like {name}</h1>
      <p>{rating}/5.0</p>
      <img src={image} alt={name}></img>
      
    </>
  );
}
Food.propTypes ={
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}
function App() {
  return (
    <div className="App">
      <h2>hello</h2>
      {food.map(value=>{
        return <Food 
        name={value.name} 
        image={value.image} 
        key={value.id} 
        rating={value.rating}
        />
      })}
    </div>
  );
}

export default App;
