import React from 'react';
import { connect } from 'react-redux';

import { searchYoutube } from './search.actions.js';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.newSearch(e.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          autoFocus="true"
          onChange={this.onChange}
        />
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
