import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import Transports from './Components/Transports/Transports';
import HeroSection from './Components/HeroSection/HeroSection';
import Benefit from './Components/Benefit/Benefit';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Transports />
      <Benefit />
      <Footer />
    </>
  )
}

export default App
