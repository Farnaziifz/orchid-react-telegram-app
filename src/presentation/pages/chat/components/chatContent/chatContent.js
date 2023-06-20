import ChatItem from "../chatItem/chatItem";
import styles from "./chatContent.module.scss";
function ChatContent({ chat }) {
  const chats = [
    { id: 1, type: 1, content: "test", date: "12/23/43" },
    {
      id: 4,
      type: 2,
      content: " test 2",
      date: "12/23/43",
    },
  ];
  return (
    <div className={styles.chatContainer}>
      {chats &&
        chats.length &&
        chats.map((item) => {
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
