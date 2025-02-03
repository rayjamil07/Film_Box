import React from "react";

const MovieCard = ({ movie, onFavorite, onWatched, favorites, watched }) => {
  const { id, title, poster_path, release_date, vote_average } = movie;

  const isFavorite = favorites.some((fav) => fav.id === id);
  const isWatched = watched.some((wat) => wat.id === id);

  return (
    <div className="movie-card">
      {/* Movie Poster */}
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />

      {/* Movie Details */}
      <div>
        <h2>{title}</h2>
        <p>
          <strong>Release:</strong> {release_date}
        </p>
        <p>
          <strong>Rating:</strong> {vote_average} / 10
        </p>

        {/* Action Buttons */}
        <div>
          <button onClick={() => onFavorite(movie)}>
            {isFavorite ? "Unfavorite" : "Favorite"}
          </button>

          <button onClick={() => onWatched(movie)}>
            {isWatched ? "Unwatch" : "Watched"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
