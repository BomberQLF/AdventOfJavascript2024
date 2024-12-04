import React, { useState, useEffect } from "react";
import "./select.css";
import MOVIES from "../top-100-christmas-movies.json";

function MovieFilter() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selection, setSelection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log("Recherche en cours :", search); 

    const filteredMovies = MOVIES.filter(
      (movie) =>
        movie.Title && 
        movie.Title.toLowerCase().includes(search.toLowerCase())
    );

    console.log("Films filtrés :", filteredMovies); 
    setSearchResults(filteredMovies);
    setIsMenuOpen(search !== "" && filteredMovies.length > 0);
  }, [search]);

  return (
    <div className="container">
      {selection ? (
        <MovieDetails
          movie={selection}
          setSelection={setSelection}
          setIsMenuOpen={setIsMenuOpen}
        />
      ) : (
        <input
          type="text"
          placeholder="Search your favorite movie"
          className="input-text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}

      {isMenuOpen && (
        <div className="menu">
          {searchResults.map((movie) => (
            <MenuItem
              key={movie.Title}
              movie={movie}
              setSelection={setSelection}
              setIsMenuOpen={setIsMenuOpen}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function MenuItem({ movie, setSelection, setIsMenuOpen }) {
  const handleItemClick = () => {
    setSelection(movie);
    setIsMenuOpen(false);
  };

  return (
    <div className="menu-item" onClick={handleItemClick}>
      <img
        src={movie.Image || "placeholder.jpg"}
        alt={movie["Image Alt"] || "No Title"}
        className="menu-item-img"
      />
      <div className="movie-details">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}

function MovieDetails({ movie, setSelection, setIsMenuOpen }) {
  return (
    <div className="movie-details-container">
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <img src={movie.Image} alt={movie.Title} className="movie-details-img" />
      <button
        onClick={() => {
          setSelection(null);
          setIsMenuOpen(false);
        }}
        className="reset-button"
      >
        Reset
      </button>
    </div>
  );
}

export default MovieFilter;