import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Provider} from 'react-redux';

import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>TODO LIST APP</Text>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
