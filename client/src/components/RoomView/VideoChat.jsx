import React from 'react';
import SimpleWebRTC from 'simplewebrtc';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import socket from './socket.js';

export class VideoChat extends React.Component {

  componentDidMount() {
    const webrtc = new SimpleWebRTC({
      localVideoEl: 'localVideo',
      remoteVideosEl: 'remoteVideos',
      autoRequestMedia: true,
      socketio: socket
    });

    webrtc.on('readyToCall', () => {
      webrtc.joinRoom(this.props.roomName);
    });
  }

  render() {
    const segmentStyle = {
      position: 'relative',
      height: '460px',
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
