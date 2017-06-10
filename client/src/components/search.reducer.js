const initialState = {
  searchResults: []
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVED_SEARCH_RESULTS':
      return {
        searchResults: action.searchResults
      };
    default:
      return state;
  }
};

export default search;
