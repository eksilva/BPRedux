const newLargeCapReducer = (state = 0, action) => {
  switch(action.type) {
    case "NEWLARGECAP":
      state = action.payload;
      return state;
    default: 
      return state;
  }
}

export default newLargeCapReducer;