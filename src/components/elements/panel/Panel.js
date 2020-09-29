import React from 'react';
import {View} from 'react-native';

import {styles} from './Panel.style';

const Panel = ({children}) => {
  return <View style={styles.panel}>{children}</View>;
};

export default Panel;
