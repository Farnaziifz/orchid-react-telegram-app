import styles from "./chatHeader.module.scss";
import ProfilePlaceHolder from "../../../../../assets/images/profileImagePlaceholder.png";

function ChatHeader({ profileImage, userName, status }) {
  return (
    <div className={styles.header}>
      <img
        src={profileImage ? profileImage : ProfilePlaceHolder}
        className={styles.profileImage}
        alt="profileImage"
      />
      <div className={styles.content}>
        <label className={styles.userLabel}>
          {userName ? userName : "Unkown"}
        </label>
        <label className={styles.timeLabel}>
          {status ? status : "last seen recently"}
        </label>
      </div>
    </div>
  );
}

export default ChatHeader;
