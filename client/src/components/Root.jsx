import React from 'react';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Root extends React.Component {

  render() {
    return (
      <Provider store={this.props.store} >
        <div>Hello World</div>
      </Provider>
    );
  }
}

const mapStateToProps = state => (
  {
    store: state.store
  }
);

Root.propTypes = {
  store: PropTypes.objectOf(PropTypes.oneOfType(
      [PropTypes.string, PropTypes.array, PropTypes.object]
    )).isRequired
};

export default connect(mapStateToProps)(Root);
