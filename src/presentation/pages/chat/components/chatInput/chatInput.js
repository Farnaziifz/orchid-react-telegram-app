import BaseInput from "presentation/components/BaseInput/baseInput";
import styles from "./chatInput.module.scss";
function ChatInput({ message, handleMessage, sendMessage }) {
  return (
    <form className={styles.inputMessage} onSubmit={sendMessage}>
      <BaseInput
        value={message}
        onChange={handleMessage}
        placeholder="message..."
      />
    </form>
  );
}

export default ChatInput;
