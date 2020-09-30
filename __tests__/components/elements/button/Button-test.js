import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import Button from '../../../../src/components/elements/button/Button';

/* REDUX */
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

describe('Button element', () => {
  let store;
  let fakeFunction = jest.fn();

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();

    // THIS WILL CLEAR THE COUNTER OF HOW MANY TIMES IT HAS BEEN CALLED
    fakeFunction.mockClear();
  });

  /*
   * CHECK IF IT RENDERS
   * HAS TEXT CONTENT MATCHING THE TITLE PROP
   * FIRES EVENT ONPRESS
   * */
  it('renders & fire press event', () => {
    const testVariable = 'TEST';

    const {queryByTestId} = render(
      <Provider store={store}>
        <Button
          onPress={() => {
            fakeFunction();
          }}
          title={testVariable}
          testID={'button-testing'}
          enabled={true}
        />
      </Provider>,
    );
    const buttontext = queryByTestId('button-text-testid');
    expect(buttontext.props.children).toBe(testVariable.toUpperCase());

    const button = queryByTestId('button-testing');
    fireEvent.press(button);
    expect(fakeFunction).toHaveBeenCalledTimes(1);
    fireEvent.press(button);
    expect(fakeFunction).toHaveBeenCalledTimes(2);
  });

  it('renders alternatives & fire press event on disabled button', async () => {
    // RENDERS WITH testTextID
    render(
      <Provider store={store}>
        <Button testTextID="button-text-testid" title={'test'} enabled={true} />
      </Provider>,
    );

    // RENDERS WITH enabled FALSE
    const {queryByTestId} = render(
      <Provider store={store}>
        <Button
          onPress={() => {
            fakeFunction();
          }}
          title={'test'}
          enabled={false}
          testID={'button-testing'}
        />
      </Provider>,
    );
    const button = queryByTestId('button-testing');
    await fireEvent.press(button);
    expect(fakeFunction).toHaveBeenCalledTimes(0);
  });

  /* CREATE SNAPSHOTS ON ELEMENTS THAT DO NOT CHANGE OFTEN */
  it('matches snapshot', () => {
    const testVariable = 'TEST';

    const {toJSON} = render(
      <Provider store={store}>
        <Button title={testVariable} enabled={true} />
      </Provider>,
    );
    expect(toJSON).toMatchSnapshot();
  });
});
