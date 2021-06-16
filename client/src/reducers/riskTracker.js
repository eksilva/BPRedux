const riskTrackerReducer = (state = 1, action) => {
  switch(action.type) {
    case "ASSIGNRISK":
      state = action.payload;
      return state;
    default: 
      return state;
  }
}

export default riskTrackerReducer;