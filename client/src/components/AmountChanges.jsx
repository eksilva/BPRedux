import React from 'react';
import { useSelector } from 'react-redux';


const AmountChanges = () => {

  const newBonds = useSelector(state => state.newBonds);
  const newLargeCap = useSelector(state => state.newLargeCap);
  const newMidCap = useSelector(state => state.newMidCap);
  const newSmallCap = useSelector(state => state.newSmallCap);
  const newForeign = useSelector(state => state.newForeign);

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

export default AmountChanges;