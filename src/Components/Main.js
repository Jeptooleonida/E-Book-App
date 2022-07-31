import React from "react";
import "../Styles/Main.css";

function Main(){
    return (
        < >
            <div className="header-section" >
                <div className="logo-section">
                    <h3> </h3>
                     <img src = "https://media.allauthor.com/images/poster/original/1529479637920-a-room-without-books-is-like-a-body-without-a-soul.jpg"/>
 
                </div>
                <div className="search-section">
                    <h2> Find your book here </h2>
                    <div className= "search" > 
                        <input type="text" placeholder="Type book name" value ="Type " />
                        <button className="search-btn"> <i className="fas fa-search"></i> </button>
                        
                    </div>
                    <img src="https://us.123rf.com/450wm/lenm/lenm1210/lenm121000033/15590717-illustration-of-stick-kids-reading-books-from-piles-of-reading-materials.jpg?ver=6" />
                </div>
            </div>

        </>
    )
}

export default Main;