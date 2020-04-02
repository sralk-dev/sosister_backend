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

export {
  fetchTrendingRecipes,
  fetchSliderItems,
  fetchTopCategories,
  fetchLatestRecipes
}