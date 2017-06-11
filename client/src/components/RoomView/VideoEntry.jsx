import React from 'react';

const VideoEntry = ({ video, onClick }) => (
  <div>
    <div onClick={() => {onClick(video.id.videoId)}} >
      {video.snippet.title}
    </div>
  </div>
);

export default VideoEntry;
