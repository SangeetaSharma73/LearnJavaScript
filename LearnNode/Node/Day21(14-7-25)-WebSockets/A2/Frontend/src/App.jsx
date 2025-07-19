import React, { useEffect, useState } from "react";
import { socket } from "./socket";

function App() {
  const [username, setUsername] = useState("");
  const [me, setMe] = useState(null);
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [msgText, setMsgText] = useState("");
  const [typingUsers, setTypingUsers] = useState([]);

  useEffect(() => {
    socket.connect();
    socket.on("identified", (me) => setMe(me));
    socket.on("receive_message", (msg) => setMessages((m) => [...m, msg]));
    socket.on("typing", ({ userId }) => {
      setTypingUsers((u) => [...new Set([...u, userId])]);
      setTimeout(
        () => setTypingUsers((u) => u.filter((id) => id !== userId)),
        2000
      );
    });
  }, []);

  const startChat = () => socket.emit("identify", { username });
  const sendMsg = (toUserId) => {
    socket.emit("send_message", { toUserId, content: msgText });
    setMsgText("");
  };
  const onTyping = (toUserId) => socket.emit("typing", { toUserId });

  return (
    <div>
      {!me ? (
        <>
          <input onChange={(e) => setUsername(e.target.value)} />
          <button onClick={startChat}>Join</button>
        </>
      ) : (
        <>
          {typingUsers.includes(/*other*/ me?.userId) && <div>Typing…</div>}
          <input
            value={msgText}
            onChange={(e) => {
              setMsgText(e.target.value);
              onTyping(/*target*/);
            }}
          />
          <button onClick={() => sendMsg(/*target*/)}>Send</button>
        </>
      )}
    </div>
  );
}

export default App;
