import styles from "./SidebarHeader.module.scss";
import SearchIcon from "../../../../../../assets/images/search-icon.svg";
import Button from "../../../../../../assets/images/hamburger-icon.svg";
import Back from "../../../../../../assets/images/back-arrow.svg";

function SidebarHeader() {
  let isProfileVisible = false;
  function profileVisibility() {
    console.log("/salam");
    isProfileVisible = true;
  }
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.buttonContainer} onClick={profileVisibility}>
          <img src={isProfileVisible ? Back : Button} alt="MenuIcon" />
        </div>
      </div>
      <div className={styles.searchContainer}>
        <img className={styles.searchIcon} src={SearchIcon} alt="searchIcon" />
        <input type="text" className={styles.search} placeholder="Search" />
      </div>
    </div>
  );
}

export default SidebarHeader;
