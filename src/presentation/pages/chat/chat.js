import ChatHeader from "./components/chatHeader/chatHeader";
import ChatContent from "./components/chatContent/chatContent";
import ChatInput from "./components/chatInput/chatInput";
import styles from "./chat.module.scss";
function Chat() {
  return (
    <div className={styles.container}>
      <ChatHeader />
      <ChatContent />
      <ChatInput />
    </div>
  );
}

export default Chat;
