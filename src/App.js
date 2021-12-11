import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Text>TODO LIST APP</Text>
          </ScrollView>
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
};

export default App;
