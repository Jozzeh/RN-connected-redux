import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

/* REDUX */
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Home from '../../../../src/components/frames/home/Home';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

describe('Button element', () => {
  let store;

  /*
   * WE ARE MOCKING THE STORE... THIS WILL NOT CHANGE THE STORE.
   * THIS TESTS THE COMPONENT AND NOT THE STATE CHANGE FOR THE COMPONENT
   * TESTING STATE CHANGE IN STORE HAPPENS IN THE ACITONS
   */
  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
  });

  /* CHECK IF IT RENDERS, AND HAS TEXT CONTENT MATCHING THE TITLE PROP */
  it('renders & fires get quote event', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    const quotebutton = getByTestId('home-button-testid');
    /* pressing the button */
    fireEvent.press(quotebutton);
    /* we expect the dispatch function to have been called 1 time, when the button was pressed */
    expect(store.dispatch).toHaveBeenCalledTimes(1);

    /* pressing the button */
    fireEvent.press(quotebutton);
    /* we expect the dispatch function to have been called 2 times, when the button was pressed again */
    expect(store.dispatch).toHaveBeenCalledTimes(2);
    /* the action will not have been dispatched in reality as the dispatch is mocked. */
  });
});
