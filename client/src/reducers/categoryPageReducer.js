const initialState = {
  categories: {
    data: [],
    isLoading: false,
    error: null
  }
}

const categoryPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES_REQUEST':
      return {
        ...state,
        categories: {
          data: [],
          isLoading: true,
          error: null
        }
      };
    case 'FETCH_CATEGORIES_SUCCESS':
      return {
        ...state,
        categories: {
          data: action.payload,
          isLoading: false,
          error: null
        }
      };
    case 'FETCH_CATEGORIES_FAILURE':
      return {
        ...state,
        categories: {
          data: [],
          isLoading: false,
          error: action.payload
        }
      }
    default:
      return state;
  }
}

export default categoryPageReducer;