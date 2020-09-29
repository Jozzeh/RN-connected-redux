import QuoteActions from '../../../src/redux/actions/QuoteActions';
import {initialState} from '../../../src/redux/reducers/QuoteReducer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Quote actions', () => {
  it('should dispatch reset action', () => {
    const store = mockStore(initialState);

    const dispatchReset = store.dispatch(QuoteActions.resetQuote());
    expect(store.getActions()[0]).toEqual(dispatchReset);
  });

  it('should dispatch getRandomQuote action', async () => {
    fetch.mockResponseOnce(JSON.stringify({value: 'Jos is a testing animal.'}));

    const store = mockStore(initialState);
    await store.dispatch(QuoteActions.getRandomQuote());

    // console.log(store.getActions());
    // USE THE COMMAND ABOVE TO SEE THE ACTIONS...
    const expectedActions = [
      {type: 'LOADING_QUOTE', payload: {}},
      {
        type: 'SUCCESS_QUOTE',
        result: {value: 'Jos is a testing animal.'},
        payload: {},
      },
    ];

    //EXPECTING 2 DISPATCH ACTIONS
    expect(store.getActions()).toHaveLength(2);

    //EXPECTING THE TYPE OF ACTIONS TO EQUAL THE TYPES OF EXPECTED ACTIONS
    expect(expectedActions[0].type).toEqual(store.getActions()[0].type);
    expect(expectedActions[1].type).toEqual(store.getActions()[1].type);

    //EXPECTING THE RESULT TO BE ...
    expect(store.getActions()[1].result.value).toEqual(
      'Jos is a testing animal.',
    );

    /* OTHER TESTS OR ASSERTIONS === https://jestjs.io/docs/en/expect */
    // expect(store.getActions()[1].result.count).toBeGreaterThan(4);
    // expect(store.getActions()[1].result.count).toBeLessThan(16);
  });
});
