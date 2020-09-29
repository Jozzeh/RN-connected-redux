import React from 'react';
import {render} from '@testing-library/react-native';

/* REDUX */
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Footer from '../../../../src/components/frames/footer/Footer';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

describe('Button element', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
  });

  /* CHECK IF IT RENDERS, AND HAS TEXT CONTENT MATCHING THE TITLE PROP */
  it('renders', () => {
    const {queryByTestId} = render(
      <Provider store={store}>
        <Footer />
      </Provider>,
    );
    const footertext = queryByTestId('footer-text-testid');
    expect(footertext.props.children).toBe('This is a demo');
  });

  /* CREATE SNAPSHOTS ON ELEMENTS THAT DO NOT CHANGE OFTEN */
  it('matches snapshot', () => {
    const {toJSON} = render(
      <Provider store={store}>
        <Footer />
      </Provider>,
    );
    expect(toJSON).toMatchSnapshot();
  });
});
