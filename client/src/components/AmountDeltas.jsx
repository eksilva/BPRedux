import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBonds, 
         changeLargeCap, 
         changeMidCap, 
         changeSmallCap, 
         changeForeign } from '../actions';

const AmountDeltas = (props) => {
  const riskTracker = useSelector(state => state.riskTracker);

  const currentBonds = useSelector(state => state.currentBonds);
  const currentLargeCap = useSelector(state => state.currentLargeCap);
  const currentMidCap = useSelector(state => state.currentMidCap);
  const currentSmallCap = useSelector(state => state.currentSmallCap);
  const currentForeign = useSelector(state => state.currentForeign);
  
  const changeActions = [changeBonds, changeLargeCap, changeMidCap, changeSmallCap, changeForeign];

  const dispatch = useDispatch();

  const risks = {
    1: [0.80, 0.20, 0, 0, 0],
    2: [0.70, 0.15, 0.15, 0, 0],
    3: [0.60, 0.15, 0.15, 0.10, 0],
    4: [0.50, 0.20, 0.20, 0.10, 0],
    5: [0.40, 0.20, 0.20, 0.20, 0],
    6: [0.35, 0.25, 0.5, 0.20, 0.05],
    7: [0.20, 0.25, 0.25, 0.25, 0.05],
    8: [0.10, 0.20, 0.40, 0.20, 0.10],
    9: [0.05, 0.15, 0.40, 0.25, 0.15],
    10: [0, 0.05, 0.25, 0.30, 0.40]
  };

  const valueArray = [Number(currentBonds), Number(currentLargeCap), Number(currentMidCap), Number(currentSmallCap), Number(currentForeign)];

  const totalValue = valueArray.reduce((a,b) => a + b);

  const newAmounts = risks[riskTracker].map(percent => Number(Number(percent * totalValue).toFixed(2)));

  const deltaAmounts = newAmounts.map((item, index) => {
    return (item - valueArray[index]).toFixed(2);
  });

  for (let i = 0; i < changeActions.length; i++) {
    dispatch(changeActions[i](newAmounts[i]));
  }; 

  const changeColor = (element) => {
    if (Number(element.innerHTML) > 0) {
      element.classList.add('positive-delta');
    } else if (Number(element.innerHTML) < 0) {
      element.classList.add('negative-delta');
    }
  };

  useEffect(() => {
    const ids = ["delta-bonds", "delta-largecap", "delta-midcap", "delta-smallcap", "delta-foreign"];
    changeColor(document.getElementById(ids[0].toString()));
    changeColor(document.getElementById(ids[1].toString()));
    changeColor(document.getElementById(ids[2].toString()));
    changeColor(document.getElementById(ids[3].toString()));
    changeColor(document.getElementById(ids[4].toString()));
  });

  return (
    <div id="amount-deltas">
      <div id="deltas">
        Amount Deltas:
        <div id="delta-bonds" className="change">{deltaAmounts[0]}</div>
        <div id="delta-largecap" className="change">{deltaAmounts[1]}</div>
        <div id="delta-midcap" className="change">{deltaAmounts[2]}</div>
        <div id="delta-smallcap" className="change">{deltaAmounts[3]}</div>
        <div id="delta-foreign" className="change">{deltaAmounts[4]}</div>
      </div>
    </div>
  )
}

export default AmountDeltas;