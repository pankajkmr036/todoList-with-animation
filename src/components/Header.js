import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import Avatar from './Avatar';

const imageSrc = require('../assets/avatar.png');

const Header = () => {
  const {todoList} = useSelector(state => state);

  let text =
    todoList && todoList.length
      ? `You have ${todoList.length} tasks`
      : 'Yayy! No pending tasks. You may add new tasks.';

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 26, fontWeight: '600'}}>Hello RichPanel</Text>
        <Text
          style={{
            fontSize: 18,
            color: 'grey',
            marginTop: 8,
            fontWeight: '500',
          }}>
          {text}
        </Text>
      </View>

      <Avatar size={60} imageSource={imageSrc} />
    </View>
  );
};

export default Header;
