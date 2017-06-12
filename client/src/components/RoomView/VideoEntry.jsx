import React from 'react';
import { Segment, Button, Header } from 'semantic-ui-react';

const VideoEntry = ({ video, onClick }) => (
  <Segment compact style={{ width: '780px', margin: '10px' }}>
    <img src={video.snippet.thumbnails.default.url} style={{ float: 'left' }} />
    <div style={{ float: 'left', margin: '10px 0 0 10px' }}>
      <Header as="h3">{video.snippet.title}</Header>
      <Button
        basic
        color="orange"
        onClick={() => { onClick(video.id.videoId) }}
      >
        Select Video
      </Button>
    </div>
  </Segment>
);

export default VideoEntry;
