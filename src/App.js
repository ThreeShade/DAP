import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" render={() => (<LandingPage />)} exact />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
