import ChatHeader from "./components/chatHeader/chatHeader";
import ChatContent from "./components/chatContent/chatContent";
import styles from "./chat.module.scss";
function Chat() {
  return (
    <div className={styles.container}>
      <ChatHeader />
      <ChatContent />
    </div>
  );
}

export default Chat;
