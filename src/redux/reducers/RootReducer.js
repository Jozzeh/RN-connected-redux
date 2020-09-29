// Imports: Dependencies
import {combineReducers} from 'redux';
import QuoteReducer from './QuoteReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  QuoteReducer: QuoteReducer,
});
// Exports
export default rootReducer;
