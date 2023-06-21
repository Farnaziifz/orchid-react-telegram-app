import styles from "./chatItem.module.scss";

function ChatItem({ content, date, type }) {
  return (
    <div
      className={`${styles.content} ${
        type === 1 ? styles.flexEnd : styles.flexStart
      }`}
    >
      <div
        className={`${styles.chatBox} ${
          type === 1 ? styles.mine : styles.notMine
        }`}
      >
        {content}
        <span className={styles.date}>
          {" "}
          {new Date(date).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}

export default ChatItem;
