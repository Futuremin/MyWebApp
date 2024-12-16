import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PreviewImage from './image/Preview.png'; 
import MovieList from './components/MovieList'; 
import AddMovie from './components/AddMovie'; 
import MovieDetails from './components/MovieDetails'; 

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to CineMovies</h1>
          <img src={PreviewImage} alt="Preview" className="App-logo" />
        </header>

        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/add-movie">Add Movie</a></li>
            <li><a href="/movies">Movies List</a></li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<h2>Home Page</h2>} />
            <Route path="/add-movie" element={<AddMovie />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
