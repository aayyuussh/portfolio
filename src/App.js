import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Artwork from './pages/artwork';
import Footer from './components/footer';
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='about' element={ <About /> } />
          <Route path='artworks' element={ <Artwork /> } />
        </Routes>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
