import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('window');

const ListItem = props => {
  const {text, completed, due} = props.item;

  if (!text) {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 4,
        marginVertical: 8,
        width: width - 60,
      }}>
      {completed && (
        <View
          style={{
            backgroundColor: '#2dc95e',
            width: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="checkbox-marked-circle" size={30} color={'white'} />
        </View>
      )}

      <View style={{padding: 16, flex: 1}}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>{text}</Text>
        <Text
          style={{
            fontSize: 14,
            color: 'grey',
            marginTop: 8,
            fontWeight: '500',
          }}>
          Due {due}
        </Text>
      </View>

      {!completed && (
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 16,
          }}>
          <Icon name="alarm" size={24} />
        </View>
      )}
    </View>
  );
};

export default ListItem;
