import React from 'react';
import { connect } from 'react-redux';
import socket from './socket.js';

import VideoEntry from './VideoEntry.jsx';
import { selectVideo } from './search.actions.js';

export class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.onVideoClick = this.onVideoClick.bind(this);
    socket.on('videoSelect', ({ videoId }) => {
      this.props.selectVideo(videoId);
    });
  }

  onVideoClick(id) {
    this.props.selectVideo(id);
    socket.emit('videoSelect', {
      videoId: id
    });
  }

  render() {
    return (
      <div>
          {this.props.searchResults && this.props.searchResults.data.items.map((video, i) => (
            <VideoEntry
              video={video}
              onClick={this.onVideoClick}
              key={i}
            />
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
