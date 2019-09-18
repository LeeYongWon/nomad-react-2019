import React, { Component } from 'react';
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
      movies: movies
    })
    console.log('api download complete')
    console.log(movies);

  }

  //ComponentDidMount
  componentDidMount() {
    console.log('componentdidmount')
    this.getMovies();
  }

  //render
  render() {
    console.log('render')
    const { isLoading, movies } = this.state;
    console.log(`render에 넘어온 ${movies}`);
    return (
      <>
        <div>{isLoading ? 'Loading...wait' : 'We are ready'}</div>
        <div>{movies.map((value, index)=>{
          return (
            <>
          <h2 key={value.id}>{value.title}</h2>
          <img src={value.medium_cover_image}></img>
          <p>{value.summary}</p>
            </>
          );
        })}</div>
      </>
    );
  }
}

export default App;