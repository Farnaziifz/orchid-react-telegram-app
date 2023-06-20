import ProfilePicture from "./components/profilePictute/profilePicture";
import BaseInput from "../../../components/BaseInput/baseInput";
import BaseButton from "../../../components/BaseButton/BaseButton";
import styles from "./profile.module.scss";
function Profile() {
  const handleInput = () => {
    console.log("handle input");
  };
  const SubmitProfile = () => {
    console.log("submit");
  };
  return (
    <div>
      <form className={styles.container} onSubmit={SubmitProfile}>
        <ProfilePicture />
        <div className={styles.profileForm}>
          <BaseInput
            title="Name"
            placeholder="Enter Name"
            value="farnaz"
            name="Name"
            onChange={handleInput}
          />
          <BaseInput
            title="Last Name"
            value="farzipour"
            placeholder="Enter Last Name"
            name="LastName"
            onChange={handleInput}
          />
          <BaseInput
            title="Bio"
            value="bio"
            placeholder="Enter Bio"
            name="Bio"
            onChange={handleInput}
          />
          <BaseButton title="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Profile;
