import React from 'react';
import SearchBar from './SearchBar.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import VideoList from './VideoList.jsx';

const SingView = () => (
  <div>
    <VideoPlayer />
    <SearchBar />
    <VideoList />
  </div>
);

export default SingView;
