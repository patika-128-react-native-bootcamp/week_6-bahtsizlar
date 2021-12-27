import React from 'react';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

import store from './store';
import Navigation from './navigation';

import {LogBox} from 'react-native';

export default function App() {
  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </Provider>
  );
}
