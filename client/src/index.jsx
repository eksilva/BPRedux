import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers'; 
import Home from './components/Home.jsx';
import Calculator from './components/Calculator.jsx';
import AmountChanges from './components/AmountChanges.jsx';

// STORE
let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const Index = () => {
  return (
    <div>
      <Home />
      <Calculator />
      <AmountChanges />
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>, 
  document.getElementById("app"));