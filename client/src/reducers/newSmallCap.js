const newSmallCapReducer = (state = 0, action) => {
  switch(action.type) {
    case "NEWSMALLCAP":
      state = action.payload;
      return state;
    default: 
      return state;
  }
}

export default newSmallCapReducer;