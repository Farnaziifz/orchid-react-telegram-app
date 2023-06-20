import SidebarItem from "../sidebarItem/sidebarItem";
import ProfilePlaceHolder from "../../../../../../assets/images/profileImagePlaceholder.png";

function SidebarContent() {
  const chatList = [
    { id: 1, userName: "farnaz" },
    { id: 2, userName: "MH" },
  ];
  return (
    <div>
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

export default SidebarContent;
