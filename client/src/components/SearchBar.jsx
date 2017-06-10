import React from 'react';
import { connect } from 'react-redux';

import { searchYoutube } from './search.actions.js';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    console.log(this.props);
  }

  render() {
    this.props.newSearch('hello');
    return (
      <div>
        SearchBar
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    searchResults: state.searchResults
  }
);

const mapDispatchToProps = dispatch => (
  {
    newSearch: query => (
      dispatch(searchYoutube(query))
    )
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
