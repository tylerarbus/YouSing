const initialState = {
  searchResults: null,
  selectedVideoId: 'VuNIsY6JdUw'
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVED_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.searchResults
      };
    case 'SELECT_VIDEO':
      return {
        ...state,
        selectedVideoId: action.selectedVideoId
      };
    default:
      return state;
  }
};

export default search;
