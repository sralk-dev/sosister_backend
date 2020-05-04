import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import RecipeItem from './../recipe-item';
import WithSositerApi from './../hoc/WithSosisterApi';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import fetchTrendingRecipes from '../../actions/trendingRecipes'

import './TrendingRecipes.css';

const TrendingRecipes = ({data}) => {

  const recipesRender = data.map( (item) => <RecipeItem key={item.id} recipe={item}/>)

  return (
    <div className="row">
      {recipesRender}
    </div>
  )
}

const TrendingRecipesContainer = ({trendingRecipes: {data, isLoading, error}, fetchTrendingRecipes}) => {

  useEffect( () => {
    fetchTrendingRecipes();
  }, [])

  let content = <TrendingRecipes data={data}/>;

  if (isLoading) {
    content = <Spinner/>
  }

  if (error) {
    content = <ErrorIndicator/>
  }

  return (
    <div className="trending-recipes col-lg-8">
      <div className="section-heading heading-dark">
          <h2 className="item-heading">TRENDING RECIPES</h2>
      </div>
      {content}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    trendingRecipes: state.homePage.trendingRecipes
  }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
  const {sosisterApi} = ownProps;
  return bindActionCreators({
    fetchTrendingRecipes: fetchTrendingRecipes(sosisterApi)
  }, dispatch)
}

export default WithSositerApi(connect(mapStateToProps, mapDispatchToProps)(TrendingRecipesContainer))
