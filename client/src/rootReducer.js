import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import search from './components/search.reducer.js';

const rootReducer = combineReducers({
  search,
  router: routerReducer
});

export default rootReducer;
