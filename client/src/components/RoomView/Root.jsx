import React from 'react';
import { connect } from 'react-redux';
import { Dimmer } from 'semantic-ui-react';

import JoinRoom from './JoinRoom.jsx';
import SearchBar from './SearchBar.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import VideoList from './VideoList.jsx';
import VideoChat from './VideoChat.jsx';

const SingView = ({ roomName }) => (
  <div>
    <Dimmer page active={!roomName} >
      <JoinRoom />
    </Dimmer>
    <section style={{ display: 'flex' }} >
      <VideoPlayer />
      {roomName &&
        <VideoChat />
      }
    </section>
    <SearchBar />
    <VideoList />
  </div>
);

const mapStateToProps = state => (
  {
    roomName: state.room.name
  }
);

export default connect(mapStateToProps)(SingView);
