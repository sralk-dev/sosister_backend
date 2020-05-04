const initialState = {
  detail: {
    data: [],
    isLoading: false,
    error: null
  }
}

const detailPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DETAIL_RECIPE_REQUEST':
      return {
        ...state,
        detail: {
          data: [],
          isLoading: true,
          error: null
        }
      };
    case 'FETCH_DETAIL_RECIPE_SUCCESS':
      return {
        ...state,
        detail: {
          data: action.payload,
          isLoading: false,
          error: null
        }
      };
    case 'FETCH_DETAIL_RECIPE_FAILURE':
      return {
        ...state,
        detail: {
          data: [],
          isLoading: false,
          error: action.payload
        }
      };
    default:
      return state;
  }
}

export default detailPageReducer;