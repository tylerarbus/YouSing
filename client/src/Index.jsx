import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { history, configureStore } from './configureStore.js';
import Root from './components/Root.jsx';

const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} history={history} />
    </AppContainer>, document.getElementById('app')
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./components/Root.jsx', () => {
    const NextRoot = require('./components/Root.jsx').default;
    render(NextRoot);
  });
}
