import riskTrackerReducer from './riskTracker';
import currentAmountsReducer from './riskTracker';

import { combineReducers } from 'redux';

 const allReducers = combineReducers({
   riskTracker: riskTrackerReducer,
   currentAmounts: currentAmountsReducer
 });

 export default allReducers;