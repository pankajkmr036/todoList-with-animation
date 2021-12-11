import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import ListItem from './ListItem';

const TodoList = () => {
  const {todoList} = useSelector(state => state);
  return (
    <View style={{marginVertical: 40}}>
      {todoList.map(x => (
        <ListItem key={x.id} item={x} />
      ))}
    </View>
  );
};

export default TodoList;
