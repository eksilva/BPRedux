import React from 'react';
import { useSelector } from 'react-redux';

const AmountChanges = () => {
  const riskTracker = useSelector(state => state.riskTracker);
  const currentBonds = useSelector(state => state.currentBonds);
  const currentLargeCap = useSelector(state => state.currentLargeCap);
  const currentMidCap = useSelector(state => state.currentMidCap);
  const currentSmallCap = useSelector(state => state.currentSmallCap);
  const currentForeign = useSelector(state => state.currentForeign);
  
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

  const totalValue = Number(currentBonds) + Number(currentLargeCap) + Number(currentMidCap) + Number(currentSmallCap) + Number(currentForeign);

  const newAmounts = risks[riskTracker].map(percent => Number(Number(percent * totalValue).toFixed(2)));

  const amountBoxes = newAmounts.map((amount,index) => 
    <li key={index}>{amount}</li>
  );
  console.log(valueArray,newAmounts);
  const deltaAmounts = newAmounts.map((item, index) => {
    return item - valueArray[index];
  })

  const deltaBoxes = deltaAmounts.map((amount, index) => 
    <li key={index}>{amount}</li>
  )

  return (
    <div id="AmountChanges">
      <div>Amount Deltas</div>
      <ul>{deltaBoxes}</ul>
      <div>Redistributed Amounts</div>
      <ul>{amountBoxes}</ul>
    </div>
  )
}

export default AmountChanges;