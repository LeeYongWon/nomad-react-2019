import React, { Component } from 'react';
import Movie from './Movie';
import axios from 'axios';
//https://yts-proxy.now.sh/list_movies.json
class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  }



  //영화 api 받아오는 함수
  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    this.setState({
      /*state의 movies*/  /*axios의 movies*/
      movies,
      isLoading:false
    })
    
   

  }

  //ComponentDidMount
  componentDidMount() {
   
    this.getMovies();
  }

  //render
  render() {
    
    const { isLoading, movies } = this.state;
    
    return (
      <>
        <div>{isLoading ? 'Loading...wait' : 'We are ready'}</div>
        {movies.map((value)=>{
          console.log(value);
          return <Movie
          key={value.id}
          id={value.id} 
          title={value.title}
          poster={value.medium_cover_image}
          rating={value.rating}
          summary={value.summary}
          />
        })}
      </>
    );
  }
}

export default App;