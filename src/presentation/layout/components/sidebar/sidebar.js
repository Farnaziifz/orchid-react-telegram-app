import SidebarHeader from "./components/sidebarHeader/SidebarHeader";
import styles from "./sidebar.module.scss";
import Profile from "../profile/profile";
import SidebarContent from "./components/sidebarContent/sidebarContent";
import { useDispatch, useSelector } from "react-redux";

function Sidebar() {
  const isProfileVisible = useSelector((state) => {
    return state.app.isProfileVisible;
  });

  return (
    <div className={styles.container}>
      <SidebarHeader />
      {!isProfileVisible ? <SidebarContent /> : <Profile />}
    </div>
  );
}

export default Sidebar;
