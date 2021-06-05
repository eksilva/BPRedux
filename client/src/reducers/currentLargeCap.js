const currentLargeCapReducer = (state = 0, action) => {
  switch(action.type) {
    case "LARGECAP":
      state = action.payload;
      return state;
    default: 
      return state;
  }
}

export default currentLargeCapReducer;