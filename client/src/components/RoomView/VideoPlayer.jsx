import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import YouTube from 'react-youtube';

export class VideoPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.onPlayerReady = this.onPlayerReady.bind(this);
  }

  onPlayerReady(event) {
    // event.target.playVideo();
  }

  render() {
    return (
      <Segment compact style={{ height: '425px', width: '750px' }}>
        <YouTube
          videoId={this.props.selectedVideoId}
          opts={{
            height: '425px',
            width: '750px',
            playerVars: {
              autoplay: 0,
              controls: 0,
              enablejsapi: 1,
              fs: 0
            }
          }}
          onReady={this.onPlayerReady}
        />
      </Segment>
    );
  }
}

const mapStateToProps = state => (
  {
    selectedVideoId: state.search.selectedVideoId
  }
);

export default connect(mapStateToProps)(VideoPlayer);
