import styles from "./SidebarHeader.module.scss";
import SearchIcon from "../../../../../../assets/images/search-icon.svg";
import Button from "../../../../../../assets/images/hamburger-icon.svg";
import Back from "../../../../../../assets/images/back-arrow.svg";
import { useDispatch, useSelector } from "react-redux";

function SidebarHeader() {
  const dispatch = useDispatch();

  const isProfileVisible = useSelector((state) => {
    return state.app.isProfileVisible;
  });

  function profileVisibility() {
    dispatch({ type: "app/isProfileVisible", payload: !isProfileVisible });
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
