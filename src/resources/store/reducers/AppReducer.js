const initialState = {
  isProfileVisible: false,
};

function Appeducer(state = initialState, action) {
  switch (action.type) {
    case "app/isProfileVisible":
      return {
        ...state,
        isProfileVisible: action.payload,
      };
    default:
      return state;
  }
}

export default Appeducer;
