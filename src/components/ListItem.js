import React from 'react';
import {View, Text} from 'react-native';
import IconMa from 'react-native-vector-icons/MaterialCommunityIcons';

const ListItem = props => {
  const {text, completed, due} = props;

  if (!text) {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 4,
        marginVertical: 8,
        paddingVertical: 8,
      }}>
      {completed && (
        <View
          style={{
            backgroundColor: '#2dc95e',
            width: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <IconMa name="checkbox-marked-circle" size={30} color={'white'} />
        </View>
      )}

      <View style={{flex: 1, padding: 16}}>
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
          <IconMa name="alarm" size={24} />
        </View>
      )}
    </View>
  );
};

export default ListItem;
