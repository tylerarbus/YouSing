import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './rootReducer.js';


const loggerMiddleware = createLogger();
const history = createHistory();
const router = routerMiddleware(history);

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware, router)
  );

  if (module.hot) {
    module.hot.accept('./rootReducer.js', () => {
      const nextRootReducer = require('./rootReducer.js').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
};

export { history, configureStore };
