import React from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';

export class VideoPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.onPlayerReady = this.onPlayerReady.bind(this);
  }

  onPlayerReady(event) {
    console.log(event.target);
    //event.target.playVideo();
  }


  render() {
    return (
      <div>
        <YouTube
          videoId="VuNIsY6JdUw"
          opts={{
            height: '500px',
            width: '900px',
            playerVars: {
              autoplay: 0,
              controls: 0,
              enablejsapi: 1,
              fs: 0
            }
          }}
          onReady={this.onPlayerReady}
        />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {

  }
);

// export default connect(mapStateToProps)(VideoPlayer);
export default VideoPlayer;
