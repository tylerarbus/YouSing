import React from 'react';
import SimpleWebRTC from 'simplewebrtc';
//import { connect } from 'react-redux';
import socket from './socket.js';

export class VideoChat extends React.Component {

  componentDidMount() {
    var webrtc = new SimpleWebRTC({
      localVideoEl: 'localVideo',
      remoteVideosEl: 'remoteVideos',
      autoRequestMedia: true,
      socketio: socket
    });

    webrtc.on('readyToCall', () => {
      webrtc.joinRoom('youSing');
    });
  }

  render() {
    return (
      <div>
        <video id="localVideo" style={{ height: '100px' }} />
        <div id="remoteVideos" style={{ height: '100px' }} />
      </div>
    );
  }
}

export default VideoChat;
// export default connect(mapStateToProps, mapDispatchToProps)(VideoChat);
