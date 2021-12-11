import React, {useState} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {DragSortableView} from 'react-native-drag-sort';
import {IconButton} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import ListItem from './ListItem';
import {deleteTodo} from '../redux/actions/todoActions';

const {width, height} = Dimensions.get('window');

const parentWidth = width;
const childrenWidth = width;
const childrenHeight = 100;
const deleteHeight = 200;

const DragableList = props => {
  const [deleteStatus, setDeleteStatus] = useState(0);

  const dispatch = useDispatch();

  const {data} = props;

  const onDragStart = () => {
    setDeleteStatus(1);
  };

  const onDragEnd = (startIndex, endIndex) => {
    console.log('startIndex', startIndex, endIndex);
    if (deleteStatus === 2 && startIndex === endIndex) {
      dispatch(deleteTodo(startIndex));
    }

    setDeleteStatus(0);
  };

  const onDragging = (gestureState, left, top, moveToIndex) => {
    let x = gestureState.moveY + (StatusBar.currentHeight | 0) + deleteHeight;

    if (x >= height) {
      setDeleteStatus(2);
    } else if (deleteStatus !== 1) {
      setDeleteStatus(1);
    }
  };

  const renderButtons = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          left: 10,
          right: 10,
          bottom: 0,
          borderRadius: 10,
        }}>
        <TouchableOpacity style={{}}>
          {deleteStatus === 1 || deleteStatus === 2 ? (
            <IconButton
              icon="trash-can"
              size={80}
              color="red"
              onPress={props.toggleModal}
            />
          ) : (
            <IconButton
              icon="plus-circle"
              size={80}
              color="blue"
              onPress={props.toggleModal}
            />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = (item, index) => <ListItem item={item} />;

  return (
    <>
      <View
        contentContainerStyle={{
          flex: 1,
          marginTop: 20,
          marginBottom: 0,
        }}>
        <DragSortableView
          dataSource={data}
          parentWidth={parentWidth}
          isDragFreely={true}
          childrenWidth={childrenWidth}
          childrenHeight={childrenHeight}
          onDragging={onDragging}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDataChange={() => {}}
          keyExtractor={(item, index) => index}
          renderItem={renderItem}
        />
      </View>
      {renderButtons()}
    </>
  );
};

export default DragableList;
