// import React from "react";
import "../Styles/Main.css";
import Card from "./Card";
import React, {useState, useEffect } from "react";
import { BOOK_DETAILS_URL } from "../API";


function Main(){
    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([])


    const handleSearch= (evt) => {
        if (evt.key === "search") {
            fetch (BOOK_DETAILS_URL)
            .then (response => response.json())
            .then (response => setBookData(response.data.items))

        }

        useEffect(() => {
            handleSearch()

        }, [])


    }



    return (
        < >
            <div className="header-section" >
                <div className="logo-section">
                    <h3> </h3>
                     <img src = "https://media.allauthor.com/images/poster/original/1529479637920-a-room-without-books-is-like-a-body-without-a-soul.jpg" alt="newimage"/>
 
                </div>
                <div className="search-section">
                    <h2> Find your book here </h2>
                    <div className= "search" > 
                        <input type="text" placeholder="Type book name" value ={search} onChange={e=>setSearch(e.target.value)} onKeyPress={handleSearch} />
                        <button className="search-btn"> <i className="fas fa-search"></i> </button>
                        
                    </div>
                    <img src="https://us.123rf.com/450wm/lenm/lenm1210/lenm121000033/15590717-illustration-of-stick-kids-reading-books-from-piles-of-reading-materials.jpg?ver=6" alt="bookimage" />
                </div>
            </div>
            <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>

        </>
    )
}

export default Main;