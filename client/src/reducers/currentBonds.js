const currentBondsReducer = (state = 0, action) => {
  switch(action.type) {
    case "BONDS":
      state = action.payload;
      return state;
    default: 
      return state;
  }
}

export default currentBondsReducer;