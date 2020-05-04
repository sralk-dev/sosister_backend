const detailRecipeRequest = () => {
  return {
    type: 'FETCH_DETAIL_RECIPE_REQUEST'
  }
}

const detailRecipeSuccess = (recipes) => {
  return {
    type: 'FETCH_DETAIL_RECIPE_SUCCESS',
    payload: recipes
  }
}

const detailRecipeFailure = (error) => {
  return {
    type: 'FETCH_DETAIL_RECIPE_FAILURE',
    payload: error
  }
}

const fetchDetailRecipe = (sosisterApi) => () => (dispatch) => {
  dispatch(detailRecipeRequest())
  sosisterApi.getDetailRecipe()
    .then( data => dispatch(detailRecipeSuccess(data)) )
    .catch(error => dispatch(detailRecipeFailure(error)) )
}

export default fetchDetailRecipe;