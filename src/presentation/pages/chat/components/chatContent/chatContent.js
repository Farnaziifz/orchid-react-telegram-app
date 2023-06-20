import ChatItem from "../chatItem/chatItem";
import styles from "./chatContent.module.scss";
function ChatContent({ chat }) {
  return (
    <div className={styles.chatContainer}>
      {chat &&
        chat.length &&
        chat.map((item) => {
          return (
            <ChatItem
              key={item.id}
              type={item.type}
              content={item.content}
              date={item.date}
            />
          );
        })}
    </div>
  );
}

export default ChatContent;
