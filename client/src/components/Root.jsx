import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Nav from './Nav.jsx';
import RoomView from './RoomView/Root.jsx';

export class Root extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <Nav />
          <ConnectedRouter history={this.props.history}>
            <div>
              <Route path="/" component={RoomView} />
            </div>
          </ConnectedRouter>
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.objectOf(PropTypes.oneOfType(
      [PropTypes.string, PropTypes.array, PropTypes.object]
    )).isRequired
};

export default Root;
