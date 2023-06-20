const initialState = {
  selectedChat: {},
  chats: [],
};

function ChatReducer(state = initialState, action) {
  switch (action.type) {
    case "chat/setChats":
      return { ...state, chats: action.payload };
    case "chat/selectedChat":
      return {
        ...state,
        selectedChat: action.payload,
      };
    default:
      return state;
  }
}

export default ChatReducer;
