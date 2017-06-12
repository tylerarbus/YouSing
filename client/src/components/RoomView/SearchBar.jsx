import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';

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
      <div style={{ margin: '10px 0 20px 15px' }} >
        <Input
          placeholder="Search YouTube..."
          autoFocus="true"
          onChange={this.onChange}
          style={{ width: '300px' }}
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
