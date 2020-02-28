import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {HashRouter, Route, Switch} from 'react-router-dom';

import rootReducer from '../store/reducers';

import Header from './layout/header/Header';
import SubHeader from './layout/subheader/SubHeader';
import Footer from './layout/footer/Footer';
import Home from './home/Home';
import Category from './category/Category';
import Recipes from './recipes/Recipes';
import Scrollup from './widgets/Scrollup';
import { notFound404 } from './errors/notFound404';
import RecipeDetails from './recipeDetails/RecipeDetails';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Scrollup/>
          <Header/>
          <SubHeader/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/categories' component={Category}/>
            <Route exact path='/recipes' component={Recipes}/>
            <Route exact path='/recipe-detail' component={RecipeDetails}/>
            <Route path='*' component={notFound404}/>
          </Switch>
          <Footer/>
        </HashRouter>
      </Provider>
    )
  }
}

export default App
