import React, { useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { BOOK_DETAILS_URL } from '../API';

function BookDetails() {
    const [book, setBook] = useState ({});

    const { id } = useParams();

    useEffect(() => {
        fetch(BOOK_DETAILS_URL)
        .then(response => response.json())
        .then(data => {
            setBook(data);
            });

    }, [id]);

    return (
        <div className="book-container">
            <div className="book-image">
                <h2>{book?.title}</h2>
                <img src={book?.image_url} alt="#" />
            </div>
            <div className="book-description">
                <h2>Description</h2>
                <p>{book?.description}</p>
                <h2>Authors</h2>
                <p>{book?.authors}</p>
                <h2>Genres</h2>
                <p>{book?.genres}</p>
            </div>
      </div>




    );

}

export default BookDetails;