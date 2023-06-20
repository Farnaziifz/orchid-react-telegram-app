import { useState } from "react";
import ChatHeader from "./components/chatHeader/chatHeader";
import ChatContent from "./components/chatContent/chatContent";
import ChatInput from "./components/chatInput/chatInput";
import styles from "./chat.module.scss";
import { useSelector, useDispatch } from "react-redux";

function Chat() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { selectedChat } = useSelector((state) => {
    return state.chat;
  });
  const { chats } = useSelector((state) => {
    return state.chat;
  });
  function sendMessage(event) {
    Promise.resolve()
      .then(() => {
        event.preventDefault();
        dispatch({
          type: "chat/sendMessage",
          payload: {
            id: Math.floor(Math.random() * 1000),
            content: message,
            date: Date.now(),
            type: 1,
          },
        });
        setMessage("");
      })
      .then(() => {
        localStorage.setItem("chats", JSON.stringify(chats));
        setMessage("");
      });
  }
  function handleMessage(event) {
    setMessage(event.target.value);
  }
  return (
    <div className={styles.container}>
      <ChatHeader
        userName={selectedChat.userName}
        profileImage={selectedChat.profileImage}
      />
      <ChatContent chat={selectedChat.chats} />
      <ChatInput
        sendMessage={sendMessage}
        handleMessage={handleMessage}
        message={message}
       />
    </div>
  );
}

export default Chat;
