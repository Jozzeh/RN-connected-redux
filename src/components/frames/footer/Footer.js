import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './Footer.style';

const Footer = ({children}) => {
  return (
    <View style={styles.footer}>
      <Text testID="footer-text-testid" style={styles.footerText}>
        This is a demo
      </Text>
    </View>
  );
};

export default Footer;
