const topLatestRecipesRequest = () => {
  return {
    type: 'FETCH_LATEST_RECIPES_REQUEST'
  }
}

const topLatestRecipesSuccess = (recipes) => {
  return {
    type: 'FETCH_LATEST_RECIPES_SUCCESS',
    payload: recipes
  }
}

const topLatestRecipesFailure = (error) => {
  return {
    type: 'FETCH_LATEST_RECIPES_FAILURE',
    payload: error
  }
}

const fetchLatestRecipes = (sosisterApi) => () => (dispatch) => {
  dispatch(topLatestRecipesRequest())
  sosisterApi.getLatestRecipes()
    .then( data => dispatch(topLatestRecipesSuccess(data)) )
    .catch(error => dispatch(topLatestRecipesFailure(error)) )
}

export default fetchLatestRecipes;