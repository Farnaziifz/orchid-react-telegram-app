import styles from "./SidebarItem.module.scss";

function SidebarItem({ id, profileImage, userName, onClick }) {
  return (
    <div
      className={styles.container}
      id={id}
      onClick={() => {
        return onClick(id);
      }}
    >
      <img
        src={profileImage}
        className={styles.profileImage}
        alt="profileImage"
      />
      <div className={styles.content}>
        <label className={styles.userName}>{userName}</label>
      </div>
    </div>
  );
}

export default SidebarItem;
