import ChatHeader from "./components/chatHeader/chatHeader";
import ChatContent from "./components/chatContent/chatContent";
import ChatInput from "./components/chatInput/chatInput";
import styles from "./chat.module.scss";
import { useSelector } from "react-redux";

function Chat() {
  const { selectedChat } = useSelector((state) => {
    return state.chat;
  });
  return (
    <div className={styles.container}>
      <ChatHeader
        userName={selectedChat.userName}
        profileImage={selectedChat.profileImage}
      />
      <ChatContent chat={selectedChat.chats} />
      <ChatInput />
    </div>
  );
}

export default Chat;
