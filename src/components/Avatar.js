import React from 'react';

import {Avatar as Avatarr} from 'react-native-paper';

const Avatar = ({size, imageSource}) => {
  return <Avatarr.Image size={size} source={imageSource} />;
};

export default Avatar;
