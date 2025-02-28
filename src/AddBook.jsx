import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './AddBook.css';

const AddBook = ({ addBook }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {
            id : Date.now(),
            title,
            author,
            description,
            coverImage,
        }
        addBook(newBook);
        navigate("/");
    }
  return (
    <div className='add-book-container'>
        <h1>Add a new Book</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value) } required/>
            </div>
            <div>
                <label>Author:</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value) } required/>
            </div>
            <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Cover Image URL:</label>
          <input type="url" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
        </form>
      
    </div>
  )
}


AddBook.propTypes = {
    addBook: PropTypes.func.isRequired,
};

export default AddBook;