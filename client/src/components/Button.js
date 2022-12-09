import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { onPress, text, styleBtn, styleTextBtn } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styleBtn}>
      <Text style={styleTextBtn}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
