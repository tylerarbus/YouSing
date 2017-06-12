import React from 'react';
import SearchBar from './SearchBar.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import VideoList from './VideoList.jsx';
import VideoChat from './VideoChat.jsx';

const SingView = () => (
  <div>
    <section style={{ display: 'flex' }} >
      <VideoPlayer />
      <VideoChat />
    </section>
    <SearchBar />
    <VideoList />
  </div>
);

export default SingView;
