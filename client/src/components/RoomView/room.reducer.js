const initialState = {
  searchResults: null,
  selectedVideoId: null,
  joining: false,
  name: null
};

const room = (state = initialState, action) => {
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
    case 'JOINING_ROOM':
      return {
        ...state,
        joining: true
      };
    case 'JOINED_ROOM':
      return {
        ...state,
        joining: false,
        name: action.name
      };
    default:
      return state;
  }
};

export default room;
