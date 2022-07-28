import React from "react";

function Main(){
    return (
        < >
            <div className="header-section" >
                <div className="logo-section">
                     <img src = "https://thumbs.dreamstime.com/b/blurred-image-many-old-books-bookshelf-library-81867124.jpg"/> 
                </div>
                <div className="search-section">
                    <h2> Find your book here </h2>
                    <div className= "search" > 
                        <input type="text" placeholder="Type book name" value ="search" />
                        <button className="search-btn"> <i className="fas fa-search"></i> </button>
                        
                    </div>
                    <img src="https://us.123rf.com/450wm/lenm/lenm1210/lenm121000033/15590717-illustration-of-stick-kids-reading-books-from-piles-of-reading-materials.jpg?ver=6" />
                </div>
            </div>

        </>
    )
}

export default Main;