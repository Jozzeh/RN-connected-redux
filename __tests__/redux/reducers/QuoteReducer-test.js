import {QuoteTypes} from '../../../src/redux/actions/QuoteActions';
import QuoteReducer, {
  initialState,
} from '../../../src/redux/reducers/QuoteReducer';

describe('Quote reducer', () => {
  it('should return the initial state', () => {
    expect(QuoteReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle resetQuote', () => {
    let currentState = JSON.parse(JSON.stringify(initialState));
    expect(
      QuoteReducer(undefined, {
        type: QuoteTypes.RESETQUOTE,
      }),
    ).toEqual(currentState);
  });

  it('should handle loading', () => {
    let currentState = JSON.parse(JSON.stringify(initialState));
    currentState.loading = 1;
    expect(
      QuoteReducer(undefined, {
        type: QuoteTypes.LOADINGQUOTE,
      }),
    ).toEqual(currentState);
  });

  /* DEMO TEST REDUCER WITH A DIFFERENT INITIAL STATE */
  it('should handle loading with new initial state', () => {
    let newInitialState = JSON.parse(JSON.stringify(initialState));
    newInitialState.quote = 'Jos, the testing animal';

    let currentState = JSON.parse(JSON.stringify(newInitialState));
    currentState.loading = 1;

    /* THE FIRST VARIABLE OF THE REDUCER IS THE STATE TO START WITH */
    expect(
      QuoteReducer(newInitialState, {
        type: QuoteTypes.LOADINGQUOTE,
      }),
    ).toEqual(currentState);
  });

  it('should handle success', () => {
    let currentState = JSON.parse(JSON.stringify(initialState));
    currentState.quote = 'Jos, the testing animal';
    expect(
      QuoteReducer(undefined, {
        type: QuoteTypes.SUCCESSQUOTE,
        result: {
          value: 'Jos, the testing animal',
        },
      }),
    ).toEqual(currentState);
  });

  it('should handle failure', () => {
    let currentState = JSON.parse(JSON.stringify(initialState));
    currentState.error = 1;
    expect(
      QuoteReducer(undefined, {
        type: QuoteTypes.FAILEDQUOTE,
      }),
    ).toEqual(currentState);
  });
});
