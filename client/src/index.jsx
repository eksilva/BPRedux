import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers'; 
import Home from './components/Home.jsx';

// STORE
let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const Index = () => {
  return (
  <Home />
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>, 
  document.getElementById("app"));