const initialState = {
  recipes: {
    data: [],
    isLoading: false,
    error: null
  }
};

const recipePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RECIPES_REQUEST':
      return {
        ...state,
        recipes: {
          data: [],
          isLoading: true,
          error: null
        }
      };
    case 'FETCH_RECIPES_SUCCESS':
      return {
        ...state,
        recipes: {
          data: action.payload,
          isLoading: false,
          error: null
        }
      };
    case 'FETCH_RECIPES_FAILURE':
      return {
        ...state,
        recipes: {
          data: [],
          isLoading: false,
          error: action.payload
        }
      };
    default:
      return state;
  }
}

export default recipePageReducer;