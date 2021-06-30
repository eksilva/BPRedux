const newBondsReducer = (state = 0, action) => {
  switch(action.type) {
    case "NEWBONDS":
      state = action.payload;
      return state;
    default: 
      return state;
  }
}

export default newBondsReducer;