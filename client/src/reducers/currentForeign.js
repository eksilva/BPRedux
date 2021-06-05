const currentForeignReducer = (state = 0, action) => {
  switch(action.type) {
    case "FOREIGN":
      state = action.payload;
      return state;
    default: 
      return state;
  }
}

export default currentForeignReducer;