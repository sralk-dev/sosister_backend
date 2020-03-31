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

export {
  fetchTrendingRecipes,
  fetchSliderItems
}