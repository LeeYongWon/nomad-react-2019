import React from 'react';

const Movie = ({ id,title,poster,rating,summary }) => {

    return (
        <div>
            <h2 >{title}</h2>
            <img src={poster} alt={title} name={title}></img>
            <h5>{rating}</h5>
            <p>{summary}</p>
        </div>
    );
}

export default Movie;