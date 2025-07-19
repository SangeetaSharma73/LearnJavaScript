const {
  handleJoinRoom,
  handleSendMessage,
} = require("../controllers/chat.controller");

module.exports = (io, socket) => {
  socket.on("joinRoom", (room) => handleJoinRoom(io, socket, room));
  socket.on("sendMessage", (data) => handleSendMessage(io, socket, data));

  socket.on("disconnect", () => {
    console.log(`❌ User disconnected: ${socket.id}`);
  });
};
