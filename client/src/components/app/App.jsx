import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from '../layout/header';
import Footer from '../layout/footer';
import HomePage from './../pages/HomePage';

import DetailPage from '../pages/DetailPage/DetailPage';
import CategoryPage from '../pages/CategoryPage';

import './App.css';

const App = () => {
  return (
    <div>
      <Header/>
      <div className="content-body">
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path="/details/:id" component={DetailPage}/>
          <Route exact path='/category' component={CategoryPage}/>
        </Switch>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
