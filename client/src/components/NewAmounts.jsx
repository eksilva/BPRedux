import React from 'react';
import { useSelector } from 'react-redux';


const NewAmounts = (props) => {

  const newBonds = useSelector(state => state.newBonds).toFixed(2);
  const newLargeCap = useSelector(state => state.newLargeCap).toFixed(2);
  const newMidCap = useSelector(state => state.newMidCap).toFixed(2);
  const newSmallCap = useSelector(state => state.newSmallCap).toFixed(2);
  const newForeign = useSelector(state => state.newForeign).toFixed(2);

  return (
    <div id="new-amounts">
        Redistributed Amounts:
        <div id="new-bonds" className="change">{newBonds}</div>
        <div id="new-largecap" className="change">{newLargeCap}</div>
        <div id="new-midcap" className="change">{newMidCap}</div>
        <div id="new-smallcap" className="change">{newSmallCap}</div>
        <div id="new-foreign" className="change">{newForeign}</div>
      </div>
  )
};

export default NewAmounts;