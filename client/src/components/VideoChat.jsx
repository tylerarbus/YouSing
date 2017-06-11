import React from 'react';
//import simplewebrtc from 'simplewebrtc';
//import { connect } from 'react-redux';
import socket from './socket.js';

export class VideoChat extends React.Component {

  componentDidMount() {
    var webrtc = new SimpleWebRTC({
      localVideoEl: 'localVideo',
      remoteVideosEl: 'remoteVideos',
      autoRequestMedia: true
    });

    webrtc.on('readyToCall', () => {
      webrtc.joinRoom('yousing');
    });
  }

  render() {
    return (
      <div>
        <video id="localVideo" style={{ height: '150px' }} />
        <div id="remoteVideos" style={{ height: '150px' }} />
      </div>
    );
  }
}

export default VideoChat;
// export default connect(mapStateToProps, mapDispatchToProps)(VideoChat);
