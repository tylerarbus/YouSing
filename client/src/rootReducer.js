import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import room from './components/RoomView/room.reducer.js';

const rootReducer = combineReducers({
  room,
  router: routerReducer
});

export default rootReducer;
