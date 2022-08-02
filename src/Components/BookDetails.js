import React, { useState, useEffect } from "react";
import "../App";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BOOK_DETAILS_URL } from "../API";
import "../Styles/BookDetails.css";
import Post from "./Review";

const BookDetails = () => {
  const [books, setBooks] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${BOOK_DETAILS_URL}/${id}`)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="book-details">
      <div className="book-image">
        <h2>{books.title}</h2>
        <img src={books.image_url} alt="book-img" />
          <div> 
            <Post />
          </div>
      </div>
      <div className="book-description">
        <h2>Description</h2>
        <p>{books.description}</p>
        <h2>Authors</h2>
        <p>{books.authors}</p>
        <h2>Genres</h2>
        <p>{books.genres}</p>
      </div>
     
    </div>
     
  );
};

export default BookDetails;
