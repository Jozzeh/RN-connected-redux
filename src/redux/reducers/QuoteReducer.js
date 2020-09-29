import produce from 'immer';
import SInfo from 'react-native-sensitive-info';

// import action types
import {QuoteTypes} from '../actions/QuoteActions';

// Initial State
export const initialState = {
  quote: 'Jos is teh best.',
  loading: 0,
  error: 0,
};
// Reducers (Modifies The State And Returns A New State)
const QuoteReducer = (previousState = initialState, action) => {
  return produce(previousState, (newState) => {
    switch (action.type) {
      case QuoteTypes.LOADINGQUOTE: {
        newState.loading = 1;
        newState.error = 0;
        return newState;
      }
      case QuoteTypes.SUCCESSQUOTE: {
        SInfo.setItem('secretQuote', action.result.value, {});
        newState.quote = action.result.value;
        newState.loading = 0;
        return newState;
      }
      case QuoteTypes.FAILEDQUOTE: {
        newState.loading = 0;
        newState.error = 1;
        return newState;
      }
      case QuoteTypes.RESETQUOTE: {
        newState = initialState;
        return newState;
      }
      // Default
      default: {
        return previousState;
      }
    }
  });
};
// Exports
export default QuoteReducer;
