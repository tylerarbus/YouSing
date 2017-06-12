module.exports = (server) => {
  const io = require('socket.io')(server);

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
}