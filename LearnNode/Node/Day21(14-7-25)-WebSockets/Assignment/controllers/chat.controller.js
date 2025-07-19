exports.handleJoinRoom = (io, socket, room) => {
  socket.join(room);
  console.log(`📥 ${socket.id} joined room: ${room}`);
  socket.to(room).emit("message", {
    user: "System",
    text: `🟢 A new user has joined room: ${room}`,
  });
};

exports.handleSendMessage = (io, socket, { room, message, user }) => {
  io.to(room).emit("message", {
    user,
    text: message,
  });
};
