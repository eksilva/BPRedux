import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { assignRisk } from '../actions';

const Home = () => {
  const riskTracker = useSelector(state => state.riskTracker);

  const dispatch = useDispatch();
  return (
    <div id="Home">
      <div>1. Please Select A Risk Level</div>
      <div>Risk Selected: {riskTracker}</div>
      <div id="risk-buttons">
        <div className="risk-button" onClick={() => {dispatch(assignRisk(1)); {/*cssFunc()*/}}}>1</div>
        <div className="risk-button" onClick={() => dispatch(assignRisk(2))}>2</div>
        <div className="risk-button" onClick={() => dispatch(assignRisk(3))}>3</div>
        <div className="risk-button" onClick={() => dispatch(assignRisk(4))}>4</div>
        <div className="risk-button" onClick={() => dispatch(assignRisk(5))}>5</div>
        <div className="risk-button" onClick={() => dispatch(assignRisk(6))}>6</div>
        <div className="risk-button" onClick={() => dispatch(assignRisk(7))}>7</div>
        <div className="risk-button" onClick={() => dispatch(assignRisk(8))}>8</div>
        <div className="risk-button" onClick={() => dispatch(assignRisk(9))}>9</div>
        <div className="risk-button" onClick={() => dispatch(assignRisk(10))}>10</div>
      </div>
    </div>
  )
}

export default Home;