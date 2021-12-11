import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

import store from './redux/store';

import Header from './components/Header';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <View
          style={{
            paddingVertical: 100,
            paddingHorizontal: 30,
            backgroundColor: '#EFEFEF',
            flex: 1,
          }}>
          <Header />
          <TodoList />
        </View>
      </PaperProvider>
    </Provider>
  );
};

export default App;
