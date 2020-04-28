import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import SliderDetail from '../../../slider-detail';
import StarScore from '../../../widgets/star-score';
import RecipeMeta from '../../../widgets/recipe-meta';
import RecipeAction from '../../../widgets/recipe-action';
import RecipeFeature from '../../../widgets/recipe-feature';
import RecipeIngredients from '../../../widgets/recipe-ingredients';
import RecipeSteps from '../../../widgets/recipe-steps';
import WithSosisterApi from '../../../hoc/WithSosisterApi';

import Spinner from '../../../spinner';
import ErrorIndicator from '../../../error-indicator';

import fetchDetailRecipe from '../../../../actions/detailRecipe'

import './RecipeDetail.css';

const RecipeDetail = ({data}) => {

  const {title, images, category, score, description, owner, likes, preptime, cooktime, serving, views, ingredients, steps} = data;
  
  return (
    <React.Fragment>
      <SliderDetail images={images}/>
      <section className="single-recipe-wrap-layout2 padding-bottom-80">
        <div className="container">
          <div className="single-recipe-layout2">
            <div className="ctg-name">{category}</div>
            <h2 className="item-title">{title}</h2>
            <div className="d-flex align-items-center justify-content-between flex-wrap mb-5">
              <StarScore score={score}/>
              <RecipeMeta owner={owner} likes={likes} cooktime={cooktime}/>
              <RecipeAction/>
            </div>
            <RecipeFeature preptime={preptime} cooktime={cooktime} serving={serving} views={views}/>
            <p className="item-description">{description}</p>
            <RecipeIngredients ingredients={ingredients}/>
            <RecipeSteps steps={steps}/>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

const RecipeDetailContainer = ({recipeDetail: {data, isLoading, error}, fetchDetailRecipe}) => {

  useEffect( () => {
    fetchDetailRecipe()
  }, [])

  if (isLoading) {
    return <Spinner/>
  }

  if (error)  {
    return <ErrorIndicator/>
  }

  return <RecipeDetail data={data}/>
}

const mapStateToProps = (state) => {
  return {
    recipeDetail: state.detailPage.detail
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {sosisterApi} = ownProps;

  return bindActionCreators({
    fetchDetailRecipe: fetchDetailRecipe(sosisterApi)
  }, dispatch)
}

export default WithSosisterApi(connect(mapStateToProps, mapDispatchToProps)(RecipeDetailContainer))
