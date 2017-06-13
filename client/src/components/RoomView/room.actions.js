import axios from 'axios';
import youtubeApiKey from '../../../config.js';

export const searchResults = results => (
  {
    type: 'RECEIVED_SEARCH_RESULTS',
    searchResults: results
  }
);

export const selectVideo = (videoId) => {
  return {
    type: 'SELECT_VIDEO',
    selectedVideoId: videoId
  };
};

export const searchYoutube = (query) => {
  const params = {
    part: 'snippet',
    type: 'video',
    key: youtubeApiKey,
    q: query,
    maxResults: 10,
    videoEmbeddable: 'true'
  };

  return (dispatch) => {
    return axios.get('https://www.googleapis.com/youtube/v3/search', { params })
      .then(results => dispatch(searchResults(results)))
      .catch(error => console.log('Error searching YouTube API', error));
  };
};

export const joiningRoom = () => (
  {
    type: 'JOINING_ROOM'
  }
);

export const joinedRoom = roomName => (
  {
    type: 'JOINED_ROOM',
    name: roomName
  }
);

export const joinRoom = roomName => (
  (dispatch) => {
    dispatch(joiningRoom());
    axios.post('/room', { room: roomName })
      .then(() => dispatch(joinedRoom(roomName)))
      .catch(error => console.log('Error joining room', error));
  }
);
