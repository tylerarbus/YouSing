import React from 'react';
import SimpleWebRTC from 'simplewebrtc';
import { Segment, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import socket from './socket.js';

export class VideoChat extends React.Component {

  constructor(props) {
    super(props);

    const webrtc = new SimpleWebRTC({
      localVideoEl: 'localVideo',
      remoteVideosEl: 'remoteVideos',
      autoRequestMedia: true,
      socketio: socket
    });

    this.state = {
      webrtc,
      videoPaused: false,
      audioPaused: false
    };

    this.onPauseVideo = this.onPauseVideo.bind(this);
    this.onMute = this.onMute.bind(this);
  }

  componentDidMount() {
    this.state.webrtc.on('readyToCall', () => {
      this.state.webrtc.joinRoom(this.props.roomName);
    });
  }

  onPauseVideo() {
    if (!this.state.videoPaused) {
      this.state.webrtc.pauseVideo();
    } else {
      this.state.webrtc.resumeVideo();
    }
    this.setState({
      videoPaused: !this.state.videoPaused
    });
  }

  onMute() {
    if (!this.state.audioMuted) {
      this.state.webrtc.mute();
    } else {
      this.state.webrtc.unmute();
    }
    this.setState({
      audioMuted: !this.state.audioMuted
    });
  }

  render() {
    const segmentStyle = {
      position: 'relative',
      height: '400px',
      width: '425px'
    };

    const localVideoStyle = {
      position: 'absolute',
      width: '25%',
      height: '25%',
      zIndex: '2'
    };

    const remoteVideoStyle = {
      position: 'relative',
      width: '405',
      height: '305',
      zindex: '-1'
    };

    return (
      <Segment style={segmentStyle} >
        <video id="localVideo" style={localVideoStyle} />
        <div id="remoteVideos" style={remoteVideoStyle} />
        <Button.Group basic size="big" style={{ margin: '15px 0 0 0' }} >
          <Button icon="mute" />
          <Button icon="video camera" onClick={this.onPauseVideo} />
        </Button.Group>
      </Segment>
    );
  }
}

const mapStateToProps = state => (
  {
    roomName: state.room.name
  }
);

export default connect(mapStateToProps)(VideoChat);
