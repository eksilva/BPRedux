const currentSmallCapReducer = (state = 0, action) => {
  switch(action.type) {
    case "SMALLCAP":
      state = action.payload;
      return state;
    default: 
      return state;
  }
}

export default currentSmallCapReducer;