const topCategoriesRequest = () => {
  return {
    type: 'FETCH_TOP_CATEGORIES_REQUEST'
  }
}

const topCategoriesSuccess = (recipes) => {
  return {
    type: 'FETCH_TOP_CATEGORIES_SUCCESS',
    payload: recipes
  }
}

const topCategoriesFailure = (error) => {
  return {
    type: 'FETCH_TOP_CATEGORIES_FAILURE',
    payload: error
  }
}

const fetchTopCategories = (sosisterApi) => () => (dispatch) => {
  dispatch(topCategoriesRequest())
  sosisterApi.getTopCategories()
    .then( data => dispatch(topCategoriesSuccess(data)) )
    .catch(error => dispatch(topCategoriesFailure(error)) )
}

export default fetchTopCategories;