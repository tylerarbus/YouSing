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
          style={{
            height: '500px',
            width: '900px'
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
