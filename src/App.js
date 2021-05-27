import React from 'react'
import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import PreLoader from './Utilities/PreLoader';

const Branches = React.lazy(() => import('./Pages/Branches/Branches'))
const Services = React.lazy(() => import('./Pages/Services/Services'))
const LandingPage = React.lazy(() => import('./Pages/LandingPage/LandingPage'))

function App() {
  return (
    <>
      <Suspense fallback={<PreLoader />}>
        <Header />
        <Switch>
          <Route path="/" render={() => (<LandingPage />)} exact />
          <Route path="/Branches" component={Branches} />
          <Route path='/Services' component={Services} />
        </Switch>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
