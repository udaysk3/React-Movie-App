import './App.css';
import React,{useState, useEffect} from 'react';
import MovieCard from './MovieCard';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`http://www.omdbapi.com/?s=${title}&apikey=263d22d8`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Batman');
  }, []);

  return (
    <div className="app">
    <div className="container">
      
      <h1>Movie App by Udaysk</h1>
    </div>


<div className="search">
  <input type="text" value={searchTerm} onChange={(e) => {setsearchTerm(e.target.value)}} placeholder="Search for movies"  />
  <img src="https://img.icons8.com/ios-filled/50/000000/search--v1.png" onClick={()=>{searchMovies(searchTerm)}}  alt="search" />
</div>

 {
  movies?.length>0? (
    <div className="container">
      {movies.map((movie) => (
        <MovieCard movie={movie} />)
      )}
    </div>
  ):(
    <div className="container">
      <h1>No Movies Found</h1>
    </div>
  )}
  </div>
  );
}

export default App;
