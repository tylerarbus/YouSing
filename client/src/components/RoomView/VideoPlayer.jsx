import React from 'react';
import { connect } from 'react-redux';
import { Segment, Dimmer, Button } from 'semantic-ui-react';
import YouTube from 'react-youtube';
import socket from './socket.js';

export class VideoPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dimmed: true
    };

    socket.on('videoPlay', ({ play }) => {
      if (play) {
        this.playVideo(true);
      }
    });

    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.playVideo = this.playVideo.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (this.props.selectedVideoId !== nextProps.selectedVideoId) {
      this.setState({
        dimmed: true
      });
    }
  }

  onPlayerReady(event) {
    this.setState({
      youTubePlayer: event.target
    });
  }

  playVideo(triggered) {
    this.setState({
      dimmed: false
    });

    this.state.youTubePlayer.playVideo();

    if (triggered !== true) {
      socket.emit('videoPlay', { play: true });
    }
  }

  render() {
    return (
      <Dimmer.Dimmable
        as={Segment}
        blurring
        dimmed={this.state.dimmed}
        compact
        style={{ height: '425px', width: '750px', margin: '15px 10px 10px 10px' }}
      >
        <Dimmer active={this.state.dimmed} inverted>
          <Button
            primary
            onClick={this.playVideo}
            disabled={!this.state.youTubePlayer}
          >
            Play Video!
          </Button>
        </Dimmer>
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
      </Dimmer.Dimmable>
    );
  }
}

const mapStateToProps = state => (
  {
    selectedVideoId: state.search.selectedVideoId
  }
);

export default connect(mapStateToProps)(VideoPlayer);
