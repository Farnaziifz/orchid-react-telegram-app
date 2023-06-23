import SidebarItem from "../sidebarItem/sidebarItem";
import ProfilePlaceHolder from "assets/images/profileImagePlaceholder.png";

function SidebarContent({ data, selectChat }) {
  return (
    <div>
      {data.map((item) => {
        return (
          <SidebarItem
            key={item.id}
            profileImage={
              item.profileImage ? item.profileImage : ProfilePlaceHolder
            }
            id={item.id}
            userName={item.userName}
            onClick={selectChat}
          />
        );
      })}
    </div>
  );
}

export default SidebarContent;
