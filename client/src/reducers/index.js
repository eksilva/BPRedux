import riskTrackerReducer from './riskTracker';
import currentBondsReducer from './currentBonds';
import currentLargeCapReducer from './currentLargeCap';
import currentMidCapReducer from './currentMidCap';
import currentSmallCapReducer from './currentSmallCap';
import currentForeignReducer from './currentForeign';
import newBondsReducer from './newBonds';
import newLargeCapReducer from './newLargeCap';
import newMidCapReducer from './newMidCap';
import newSmallCapReducer from './newSmallCap';
import newForeignReducer from './newForeign';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  riskTracker: riskTrackerReducer,
  currentBonds: currentBondsReducer,
  currentLargeCap: currentLargeCapReducer,
  currentMidCap: currentMidCapReducer,
  currentSmallCap: currentSmallCapReducer, 
  currentForeign: currentForeignReducer,
  newBonds: newBondsReducer,
  newLargeCap: newLargeCapReducer,
  newMidCap: newMidCapReducer,
  newSmallCap: newSmallCapReducer,
  newForeign: newForeignReducer
});

 export default allReducers;