const sliderItemsRequest = () => {
  return {
    type: 'FETCH_SLIDER_ITEMS_REQUEST'
  }
}

const sliderItemsSuccess = (recipes) => {
  return {
    type: 'FETCH_SLIDER_ITEMS_SUCCESS',
    payload: recipes
  }
}

const sliderItemsFailure = (error) => {
  return {
    type: 'FETCH_SLIDER_ITEMS_FAILURE',
    payload: error
  }
}

const fetchSliderItems = (sosisterApi) => () => (dispatch) => {
  dispatch(sliderItemsRequest())
  sosisterApi.getTrendingRecipes()
    .then( data => dispatch(sliderItemsSuccess(data)) )
    .catch(error => dispatch(sliderItemsFailure(error)) )
}

export default fetchSliderItems;