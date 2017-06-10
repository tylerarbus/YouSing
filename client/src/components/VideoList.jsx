import React from 'react';
import { connect } from 'react-redux';

import VideoEntry from './VideoEntry.jsx';
import { selectVideo } from './search.actions.js';

export class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.onVideoClick = this.onVideoClick.bind(this);
  }

  onVideoClick(id) {
    this.props.selectVideo(id);
  }

  render() {
    return (
      <div>
          {this.props.searchResults && this.props.searchResults.data.items.map(video => (
            <VideoEntry video={video} onClick={this.onVideoClick} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    searchResults: state.search.searchResults
  }
);

const mapDispatchToProps = dispatch => (
  {
    selectVideo: id => (
      dispatch(selectVideo(id))
    )
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
