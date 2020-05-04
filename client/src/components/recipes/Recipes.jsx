import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import RecipeItem from './../recipe-item';
import WithSositerApi from './../hoc/WithSosisterApi';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import fetchRecipes from '../../actions/recipes'

import './Recipes.css';

const Recipes = ({data}) => {

  const recipesRender = data.map( (item) => <RecipeItem key={item.id} recipe={item}/>)

  return (
    <div className="row">
      {recipesRender}
    </div>
  )
}

const RecipesContainer = ({recipes: {data, isLoading, error}, fetchRecipes}) => {

  useEffect( () => {
    fetchRecipes();
  }, [])

  let content = <Recipes data={data}/>;

  if (isLoading) {
    content = <Spinner/>
  }

  if (error) {
    content = <ErrorIndicator/>
  }

  return (
    <div className="trending-recipes col-lg-8">
      <div className="section-heading heading-dark">
          <h2 className="item-heading">RECIPES</h2>
      </div>
      {content}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipePage.recipes
  }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
  const {sosisterApi} = ownProps;
  return bindActionCreators({
    fetchRecipes: fetchRecipes(sosisterApi)
  }, dispatch)
}

export default WithSositerApi(connect(mapStateToProps, mapDispatchToProps)(RecipesContainer))
