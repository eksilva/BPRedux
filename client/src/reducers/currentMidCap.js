const currentMidCapReducer = (state = 0, action) => {
  switch(action.type) {
    case "MIDCAP":
      state = action.payload;
      return state;
    default: 
      return state;
  }
}

export default currentMidCapReducer;