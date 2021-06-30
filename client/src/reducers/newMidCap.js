const newMidCapReducer = (state = 0, action) => {
  switch(action.type) {
    case "NEWMIDCAP":
      state = action.payload;
      return state;
    default: 
      return state;
  }
}

export default newMidCapReducer;