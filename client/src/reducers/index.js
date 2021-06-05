import riskTrackerReducer from './riskTracker';
import currentBondsReducer from './currentBonds';
import currentLargeCapReducer from './currentLargeCap';
import currentMidCapReducer from './currentMidCap';
import currentSmallCapReducer from './currentSmallCap';
import currentForeignReducer from './currentForeign';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  riskTracker: riskTrackerReducer,
  currentBonds: currentBondsReducer,
  currentLargeCap: currentLargeCapReducer,
  currentMidCap: currentMidCapReducer,
  currentSmallCap: currentSmallCapReducer, 
  currentForeign: currentForeignReducer 
});

 export default allReducers;