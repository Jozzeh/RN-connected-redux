import React from 'react';
import {Text} from 'react-native';
import {render} from '@testing-library/react-native';

import Panel from '../../../../src/components/elements/panel/Panel';

/* REDUX */
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

describe('Panel element', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
  });

  /* BASIC TEST IF IT RENDERS */
  it('renders', () => {
    render(
      <Provider store={store}>
        <Panel>
          <Text>Renders</Text>
        </Panel>
      </Provider>,
    );
  });

  /* CREATE SNAPSHOTS ON ELEMENTS THAT DO NOT CHANGE OFTEN */
  it('matches snapshot', () => {
    const {toJSON} = render(
      <Provider store={store}>
        <Panel>
          <Text>Renders</Text>
        </Panel>
      </Provider>,
    );
    expect(toJSON).toMatchSnapshot();
  });
});
