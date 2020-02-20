import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {HashRouter, Route, Switch} from 'react-router-dom';

import rootReducer from '../store/reducers';

import Header from './Layout/header/Header';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Header/>
          <Switch>
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}

export default App
