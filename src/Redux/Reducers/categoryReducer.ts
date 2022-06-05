export const categoryReducer = (
  state = {
    categories: [],
  },
  action: any
) => {
  switch (action.type) {
    case "CATEGORY_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case "CATEGORY_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
