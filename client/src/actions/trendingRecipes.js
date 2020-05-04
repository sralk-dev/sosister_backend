const trendingRecipesRequest = () => {
  return {
    type: 'FETCH_TRENDING_RECIPES_REQUEST'
  }
}

const trendingRecipesSuccess = (recipes) => {
  return {
    type: 'FETCH_TRENDING_RECIPES_SUCCESS',
    payload: recipes
  }
}

const trendingRecipesFailure = (error) => {
  return {
    type: 'FETCH_TRENDING_RECIPES_FAILURE',
    payload: error
  }
}

const fetchTrendingRecipes = (sosisterApi) => () => (dispatch) => {
  dispatch(trendingRecipesRequest())
  sosisterApi.getTrendingRecipes()
    .then( data => dispatch(trendingRecipesSuccess(data)) )
    .catch(error => dispatch(trendingRecipesFailure(error)) )
}

export default fetchTrendingRecipes;