import React from 'react';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import BookDetails from './Components/BookDetails';
import Favorites from './Components/Favorites';

function App() {
  return (
    <div className="App">
      <Navbar />
 
      <Main />
    
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
