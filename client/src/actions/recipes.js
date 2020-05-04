const recipesRequest = () => {
  return {
    type: 'FETCH_RECIPES_REQUEST'
  }
}

const recipesSuccess = (recipes) => {
  return {
    type: 'FETCH_RECIPES_SUCCESS',
    payload: recipes
  }
}

const recipesFailure = (error) => {
  return {
    type: 'FETCH_RECIPES_FAILURE',
    payload: error
  }
}

const fetchRecipes = (sosisterApi) => () => (dispatch) => {
  dispatch(recipesRequest())
  sosisterApi.getRecipes()
    .then( data => dispatch(recipesSuccess(data)) )
    .catch(error => dispatch(recipesFailure(error)) )
}

export default fetchRecipes;