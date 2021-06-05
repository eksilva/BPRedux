const currentAmountsReducer = (state = [], action) => {
  switch(action.type) {
    case 'BONDS':
      return [...state, 
      { 'BONDS': action.payload}];
    case 'LARGECAP':
      return [...state, 
      { 'LARGECAP': action.payload}];
    case 'MIDCAP':
      return [...state, 
      { 'MIDCAP': action.payload}];
    case 'SMALLCAP':
      return [...state, 
      { 'SMALLCAP': action.payload}];
    case 'FOREIGN':
      return [...state, 
      { 'FOREIGN': action.payload}];
    default:
      return state;
  }
}

export default currentAmountsReducer;