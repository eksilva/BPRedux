import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { assignRisk } from '../actions';

const Home = () => {
  const riskTracker = useSelector(state => state.riskTracker);

  const dispatch = useDispatch();
  return (
    <div id="Home">
      <div>Risk Selected: {riskTracker}</div>
      <button onClick={() => dispatch(assignRisk(1))}>1</button>
      <button onClick={() => dispatch(assignRisk(2))}>2</button>
      <button onClick={() => dispatch(assignRisk(3))}>3</button>
      <button onClick={() => dispatch(assignRisk(4))}>4</button>
      <button onClick={() => dispatch(assignRisk(5))}>5</button>
      <button onClick={() => dispatch(assignRisk(6))}>6</button>
      <button onClick={() => dispatch(assignRisk(7))}>7</button>
      <button onClick={() => dispatch(assignRisk(8))}>8</button>
      <button onClick={() => dispatch(assignRisk(9))}>9</button>
      <button onClick={() => dispatch(assignRisk(10))}>10</button>
    </div>
  )
}

export default Home;