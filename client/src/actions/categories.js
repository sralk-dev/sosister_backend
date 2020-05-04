const categoriesRequest = () => {
  return {
    type: 'FETCH_CATEGORIES_REQUEST'
  }
}

const categoriesSuccess = (recipes) => {
  return {
    type: 'FETCH_CATEGORIES_SUCCESS',
    payload: recipes
  }
}

const categoriesFailure = (error) => {
  return {
    type: 'FETCH_CATEGORIES_FAILURE',
    payload: error
  }
}

const fetchCategories = (sosisterApi) => () => (dispatch) => {
  dispatch(categoriesRequest())
  sosisterApi.getCategories()
    .then( data => dispatch(categoriesSuccess(data)) )
    .catch(error => dispatch(categoriesFailure(error)) )
}

export default fetchCategories;