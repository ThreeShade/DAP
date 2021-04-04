import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Branches from './Pages/Branches/Branches';
import Services from './Pages/Services/Services';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" render={() => (<LandingPage />)} exact />
          <Route path="/Branches" render={() => (<Branches />)} />
          <Route path='/Services' component={Services} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
