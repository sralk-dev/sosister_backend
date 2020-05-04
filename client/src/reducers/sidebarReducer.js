const initialState = {
  topCategories: {
    data: [],
    isLoading: false,
    error: null
  },
  latestRecipes: {
    data: [],
    isLoading: false,
    error: null
  }
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TOP_CATEGORIES_REQUEST':
      return {
        ...state,
        topCategories:{
          data: [],
          isLoading: true,
          error: null
        }
      };
    case 'FETCH_TOP_CATEGORIES_SUCCESS':
      return {
        ...state,
        topCategories: {
          data: action.payload,
          isLoading: false,
          error: null
        }
      };
    case 'FETCH_TOP_CATEGORIES_FAILURE':
      return {
        ...state,
        sidebar: {
          data: [],
          isLoading: false,
          error: action.payload
        }
      };
    case 'FETCH_LATEST_RECIPES_REQUEST':
      return {
        ...state,
        latestRecipes:{
          data: [],
          isLoading: true,
          error: null
        }
      };
    case 'FETCH_LATEST_RECIPES_SUCCESS':
      return {
        ...state,
        latestRecipes: {
          data: action.payload,
          isLoading: false,
          error: null
        }
      };
    case 'FETCH_LATEST_RECIPES_FAILURE':
      return {
        ...state,
        topCategories: {
          data: [],
          isLoading: false,
          error: action.payload
        }
      };
    default:
      return state;
  }
}

export default sidebarReducer;      