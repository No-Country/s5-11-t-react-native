import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const BtnState = (props) => {
  const { styleContainerBtnState, imgSate, onPress } = props;
  return (
    <View style={styleContainerBtnState}>
      <TouchableOpacity onPress={onPress}>
        <Image source={imgSate}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default BtnState;
