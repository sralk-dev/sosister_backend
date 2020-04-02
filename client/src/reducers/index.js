const initialState = {
  slider: {
    data: [],
    isLoading: false,
    error: null
  },
  trendingRecipes: {
    data: [],
    isLoading: false,
    error: null
  },
  sidebar: {
    topCategories: {
      data: [],
      isLoading: false,
      error: null
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TRENDING_RECIPES_REQUEST':
      return {
        ...state,
        trendingRecipes: {
          data: [],
          isLoading: true,
          error: null
        }
      };
    case 'FETCH_TRENDING_RECIPES_SUCCESS':
      return {
        ...state,
        trendingRecipes: {
          data: action.payload,
          isLoading: false,
          error: null
        }
      };
    case 'FETCH_TRENDING_RECIPES_FAILURE':
      return {
        ...state,
        trendingRecipes: {
          data: [],
          isLoading: false,
          error: action.payload
        }
      };
    case 'FETCH_SLIDER_ITEMS_REQUEST':
      return {
        ...state,
        slider: {
          data: [],
          isLoading: true,
          error: null
        }
      };
    case 'FETCH_SLIDER_ITEMS_SUCCESS':
      return {
        ...state,
        slider: {
          data: action.payload,
          isLoading: false,
          error: null
        }
      };
    case 'FETCH_SLIDER_ITEMS_FAILURE':
      return {
        ...state,
        sidebar: {
          ... state.sidebar,
          topCategories:{
            data: [],
            isLoading: false,
            error: action.payload
          }
        }
      };
      case 'FETCH_TOP_CATEGORIES_REQUEST':
        return {
          ...state,
          sidebar: {
            ... state.sidebar,
            topCategories:{
              data: [],
              isLoading: true,
              error: null
            }
          }
        };
      case 'FETCH_TOP_CATEGORIES_SUCCESS':
        return {
          ...state,
          sidebar: {
            ... state.sidebar,
            topCategories: {
              data: action.payload,
              isLoading: false,
              error: null
            }
          }
        };
      case 'FETCH_TOP_CATEGORIES_FAILURE':
        return {
          ...state,
          sidebar: {
            ... state.sidebar,
            topCategories: {
              data: [],
              isLoading: false,
              error: action.payload
            }
          }
        };
    default:
      return state
  }
}

export default reducer;