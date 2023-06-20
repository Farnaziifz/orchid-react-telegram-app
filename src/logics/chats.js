import { chatApi } from "../resources/api/modules/chat";

const api = chatApi();

export const getChatData = async () => await api.getChats();
