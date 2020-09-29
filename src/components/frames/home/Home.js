import React from 'react';
import {Text} from 'react-native';

import {connect} from 'react-redux';
import QuoteActions from '../../../redux/actions/QuoteActions';

import Button from '../../elements/button/Button';
import Panel from '../../elements/panel/Panel';

const Home = (props) => {
  return (
    <Panel>
      <Text testID="home-text-testid">{props.quote}</Text>
      <Button
        testID="home-button-testid"
        title={'Get Random Quote'}
        enabled={true}
        onPress={() => {
          props.getRandomQuote();
        }}
      />
    </Panel>
  );
};

const mapStateToProps = (state) => ({
  ...state.QuoteReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getRandomQuote: () => dispatch(QuoteActions.getRandomQuote()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
