import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
