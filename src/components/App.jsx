import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import MovieContainer from './MovieContainer';

function App() {
    // State mananger for movies, favorites, watched movies and search results
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState(() => {
      return JSON.parse(localStorage.getItem("favorites")) || [];
    });
    const [watched, setWatched] = useState(() => {
      return JSON.parse(localStorage.getItem("watched")) || [];
    });
    const [searchResults, setSearchResults] = useState([]);
  
    const API_URL = "https://api.themoviedb.org/3/movie/popular";
    const API_ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjVjMDkyZTNlMzk1ODM1ZjQzODk0OTNiM2FhNzEzZiIsIm5iZiI6MTczNzk4MjE1My43MDUsInN1YiI6IjY3OTc4MGM5OWEzMGE4NWIyNzIzZWMxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UnNhJnACy0s2LbESQamKk_ay3BWAi5C8vtTc0z7mAHg";
  
    // Fetch data from the API and state manage it
    useEffect(() => {
      fetch(API_URL, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_ACCESS_TOKEN}`
        }
      })
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
      })
    }, []);

    // Save favorites and watched movies to local storage
    useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
      localStorage.setItem("watched", JSON.stringify(watched));
    }, [watched]);
  
    // Function to add or remove from a list of favorite movies
    function handleFavorite(movie) {
      const isFavorite = favorites.find(favorite => favorite.id === movie.id);
      if (isFavorite) {
        const newFavorites = favorites.filter(favorite => favorite.id !== movie.id);
        setFavorites(newFavorites);
      } else {
        setFavorites([...favorites, movie]);
      }}
      
    // Function for handling watched movies
    function handleWatched(movie) {
      const isWatched = watched.find(watched => watched.id === movie.id);
      if (isWatched) {
        const newWatched = watched.filter(watched => watched.id !== movie.id);
        setWatched(newWatched);
      } else {
        setWatched([...watched, movie]);
      }
    }
  
    // Function for searching movies
    function handleSearch(searchTerm) {
      const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));

      setSearchResults(filteredMovies);
    }

    return (
      <Router>
        <NavBar />
        <SearchBar handleSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<MovieContainer movies={searchResults.length > 0 ? searchResults : movies} onFavorite={handleFavorite} onWatched={handleWatched} favorites={favorites} watched={watched}/>}/>
          <Route path="/favorites" element={<MovieContainer movies={favorites} onFavorite={handleFavorite} onWatched={handleWatched} favorites={favorites} watched={watched}/>}/>
          <Route path="/recently-watched" element={<MovieContainer movies={watched} onFavorite={handleFavorite} onWatched={handleWatched} favorites={favorites} watched={watched}/>}/>
        </Routes>
      </Router>
    )
  }
  
  export default App;