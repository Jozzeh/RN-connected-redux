/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {store, persistor} from '../../redux/store/Store';

import Footer from '../frames/footer/Footer';
import Home from '../frames/home/Home';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Home />
            <Footer />
          </ScrollView>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
