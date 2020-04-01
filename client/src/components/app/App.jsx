import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from '../layout/header';
import HomePage from './../pages/HomePage';

import './App.css';

const App = () => {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch>
    </div>
  )
}

export default App;
