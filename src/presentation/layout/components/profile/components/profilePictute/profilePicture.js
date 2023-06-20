import ProfileImage from "../../../../../../assets/images/profileImagePlaceholder.png";
import styles from "./profilePicture.module.scss";

function ProfilePicture({ src }) {
  return (
    <div className={styles.container}>
      <img
        src={src ? src : ProfileImage}
        className={styles.image}
        alt="profileImage"
      />
    </div>
  );
}
export default ProfilePicture;
