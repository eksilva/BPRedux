import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { assignRisk } from '../actions';

const Home = () => {
  const riskTracker = useSelector(state => state.riskTracker);

  const dispatch = useDispatch();

  const injectStyle = (id) => {
    //document.getElementById(id).classList.remove('risk-button');
    document.getElementById(id).classList.add('selected-risk-button');
  }
  
  const rejectStyle = (id) => {
    document.getElementById(id).classList.remove('selected-risk-button');
    //document.getElementById(id).classList.add('risk-button');
  }

  const highlight = (event) => {
    rejectStyle(`rb${riskTracker}`);
    let val = Number(event.target.innerHTML);
    dispatch(assignRisk(val));
    injectStyle(event.target.id);
  }

  return (
    <div id="Home">
      <div id="risk-buttons">
        <div className="risk-button selected-risk-button" id="rb1" onClick={(event) => highlight(event)}>1</div>
        <div className="risk-button" id="rb2" onClick={(event) => highlight(event)}>2</div>
        <div className="risk-button" id="rb3" onClick={(event) => highlight(event)}>3</div>
        <div className="risk-button" id="rb4" onClick={(event) => highlight(event)}>4</div>
        <div className="risk-button" id="rb5" onClick={(event) => highlight(event)}>5</div>
        <div className="risk-button" id="rb6" onClick={(event) => highlight(event)}>6</div>
        <div className="risk-button" id="rb7" onClick={(event) => highlight(event)}>7</div>
        <div className="risk-button" id="rb8" onClick={(event) => highlight(event)}>8</div>
        <div className="risk-button" id="rb9" onClick={(event) => highlight(event)}>9</div>
        <div className="risk-button" id="rb10" onClick={(event) => highlight(event)}>10</div>
      </div>
    </div>
  )
}

export default Home;