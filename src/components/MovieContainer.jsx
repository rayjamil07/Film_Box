 
import React from 'react';
import MovieCard from './MovieCard';

function MovieContainer ({movies, onFavorite, onWatched, favorites, watched}){
  return(
    <div>
      {movies.map((movie) => (
        <MovieCard
        key={movie.id}
        movie={movie}
        onFavorite={onFavorite}
        onWatched={onWatched}
        favorites={favorites}
        watched={watched}
        />
      ))}
    </div>
  )
}

export default MovieContainer