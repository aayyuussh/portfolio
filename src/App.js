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
          <Route path='/portfolio' element={ <Home /> } />
          <Route path='/portfolio/about' element={ <About /> } />
          <Route path='/portfolio/artworks' element={ <Artwork /> } />
        </Routes>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
