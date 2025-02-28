// src/App.jsx

import React from 'react';
import Home from './Home';
import './App.css'; // Import global styles
import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import booksData from './booksData'
import AddBook from './AddBook';
function App() {
  const [books, setBooks] = useState(booksData);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home books={books} />} />
      <Route path="/add-book" element={<AddBook addBook={addBook} />} />
    </Routes>
  </Router>
  );
}


export default App;