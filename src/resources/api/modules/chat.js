import { api } from "../index";

const pageUrl = "chats";

const getChatsData = async () => {
  const res = await api.get(pageUrl);
  return res.data;
};

export const chatApi = () => {
  return {
    getChatsData,
  };
};
