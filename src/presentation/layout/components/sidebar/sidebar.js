import SidebarHeader from "./components/sidebarHeader/SidebarHeader";
import styles from "./sidebar.module.scss";
import Profile from "../profile/profile";
import SidebarContent from "./components/sidebarContent/sidebarContent";
function Sidebar() {
  let profileVisible = false;
  return (
    <div className={styles.container}>
      <SidebarHeader />
      {!profileVisible ? <SidebarContent /> : <Profile />}
    </div>
  );
}

export default Sidebar;
