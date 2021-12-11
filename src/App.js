import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

import store from './redux/store';

import Header from './components/Header';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
