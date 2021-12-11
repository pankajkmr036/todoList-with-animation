import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

import store from './redux/store';

import Header from './components/Header';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaView style={{backgroundColor: '#EFEFEF', flex: 1}}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{
              marginVertical: 48,
              marginHorizontal: 24,
            }}>
            <Header />
          </ScrollView>
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
};

export default App;
