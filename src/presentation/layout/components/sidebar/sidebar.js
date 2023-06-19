import SidebarItem from "./components/sidebarItem/sidebarItem";
import ProfilePlaceHolder from "../../../../assets/images/profileImagePlaceholder.png";

import styles from "./sidebar.module.scss";

function Sidebar() {
  const chatList = [
    { id: 1, userName: "farnaz" },
    { id: 2, userName: "MH" },
  ];
  return (
    <div className={styles.container}>
      {chatList.map((item) => {
        return (
          <SidebarItem
            key={item.id}
            profileImage={
              item.profileImage ? item.profileImage : ProfilePlaceHolder
            }
            id={item.id}
            userName={item.userName}
          />
        );
      })}
    </div>
  );
}

export default Sidebar;
