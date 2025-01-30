//Movie container
import React from 'react';
import MovieCard from './MovieCard';

function MovieContainer({ movies }) {
  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieContainer;