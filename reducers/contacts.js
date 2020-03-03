const initialState = {
  data: [],
  isFetching: null,
  hasError: false,
  errorMsg: null
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case "FETCH_CONTACTS_FETCHING":
      return {
        ...state,
        isFetching: true,
        hasError: false,
        errorMsg: null
      };
    case "FETCH_CONTACTS_COMPLETE":
      return {
        ...state,
        data: action.data,
        isFetching: false
      };
    case "FETCH_CONTACTS_FAILED":
      return {
        ...state,
        isFetching: false,
        hasError: true,
        errorMsg: "Something went wrong"
      };
    default:
      return state;
  }
}
