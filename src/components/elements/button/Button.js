import React from 'react';
import {Text, TouchableHighlight} from 'react-native';

import {styles} from './Button.style';

/**
 * Use `Button` to perform an action in the system.
 */
const Button = ({testTextID, testID, title, onPress, enabled}) => {
  /* the testID is a prop because we want to test it in another component as well */
  return (
    <TouchableHighlight
      testID={testID ? testID : 'button-testid'}
      style={[styles.button]}
      underlayColor="darkcyan"
      onPress={() => {
        if (enabled) {
          onPress();
        }
      }}>
      <Text
        testID={testTextID ? testTextID : 'button-text-testid'}
        style={[styles.title]}>
        {title.toUpperCase()}
      </Text>
    </TouchableHighlight>
  );
};

export default Button;
