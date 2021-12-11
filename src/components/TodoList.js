import React, {useState} from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import {IconButton, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import {useSelector, useDispatch} from 'react-redux';

import DragableList from './DragableList';

import {addTodo} from '../redux/actions/todoActions';

const TodoList = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');

  const {todoList} = useSelector(state => state);

  const dispatch = useDispatch();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const addToDoItem = () => {
    if (!text) {
      return Alert.alert('Please enter some text.');
    }

    dispatch(addTodo({text}));
    toggleModal();
  };

  return (
    <>
      <DragableList data={todoList} toggleModal={toggleModal} />

      <Modal
        isVisible={isModalVisible}
        backdropColor="white"
        backdropOpacity={1}
        animationInTiming={500}
        onBackButtonPress={toggleModal}>
        <View
          style={{
            flex: 1,
            paddingVertical: 40,
            backgroundColor: 'white',
          }}>
          <IconButton
            icon="close"
            size={30}
            color="black"
            style={{backgroundColor: 'white'}}
            onPress={toggleModal}
          />

          <TextInput
            mode="outlined"
            outlineColor="white"
            style={{backgroundColor: 'white'}}
            label="What would you like to add?"
            value={text}
            onChangeText={text => setText(text)}
          />

          <TouchableOpacity
            style={{
              marginTop: 600,
              backgroundColor: 'blue',
              alignItems: 'center',
              paddingVertical: 10,
            }}
            onPress={addToDoItem}>
            <Icon name="plus" size={60} color={'white'} />
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default TodoList;
