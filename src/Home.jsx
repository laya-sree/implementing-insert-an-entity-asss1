// src/components/Home.jsx

import React, { useState } from "react";
import BookCard from "./components/BookCard";
import {useNavigate} from "react-router-dom"; 
import PropTypes from 'prop-types';
import "./Home.css"; // Import the CSS for styling

const Home = ({books}) => {
 const [booksData,setBooksData] = useState(books);
  
  const navigate = useNavigate();
 
  
  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <button onClick={() => navigate('/add-book')} className="add-book-button">Add Book</button>
      <div className="books-grid">
        {booksData.map((book) => (
          <BookCard key={book.id} book={book} />
        ))} 
      </div>
    </div>
  );
};

Home.propTypes = {
  books: PropTypes.array.isRequired,
};

export default Home;