import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers'; 
import Home from './components/Home.jsx';
import Calculator from './components/Calculator.jsx';


// STORE
let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const Index = () => {
  return (
    <div>
      <div id="banner">Financial Advisor</div>
      <div id="index-wrap">
        <div id="content-wrap">
          <div className="instructions">1. Select A Risk Level (Low -{'>'} High)</div>
          <Home />
          <div className="instructions">2. Input Current Allocation Amounts Per Category</div>
          <Calculator />
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>, 
  document.getElementById("app"));