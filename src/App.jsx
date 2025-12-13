import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css'
import Home from '../src/pages/Home'

import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // slight delay ensures page renders
      }
    }
  }, [location]);

  return (
    <HelmetProvider>
      <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer/>
      </>
    </HelmetProvider>
  );
}

export default App
