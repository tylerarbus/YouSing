const socketio = require('socket.io');

module.exports = (server) => {
  const io = socketio(server);

  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('videoSelect', (videoId) => {
      socket.broadcast.emit('videoSelect', videoId);
    });

    socket.on('videoPlay', (play) => {
      socket.broadcast.emit('videoPlay', play);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
};
