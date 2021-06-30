const newForeignReducer = (state = 0, action) => {
  switch(action.type) {
    case "NEWFOREIGN":
      state = action.payload;
      return state;
    default: 
      return state;
  }
}

export default newForeignReducer;