import SidebarHeader from "./components/sidebarHeader/SidebarHeader";
import styles from "./sidebar.module.scss";
import Profile from "../profile/profile";
import SidebarContent from "./components/sidebarContent/sidebarContent";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isProfileVisible = useSelector((state) => {
    return state.app.isProfileVisible;
  });
  const chats = useSelector((state) => {
    return state.chat.chats;
  });
  function selectChat(id) {
    chats.map((item) => {
      if (item.id === id) {
        dispatch({ type: "chat/selectedChat", payload: item });
        navigate(`/chat/${item.id}`);
      }
    });
  }
  return (
    <div className={styles.container}>
      <SidebarHeader />
      {!isProfileVisible ? (
        <SidebarContent data={chats} selectChat={selectChat} />
      ) : (
        <Profile />
      )}
    </div>
  );
}

export default Sidebar;
