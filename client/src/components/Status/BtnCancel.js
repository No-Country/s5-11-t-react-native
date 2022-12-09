import React from 'react';
import Button from '../Button';
import { useNavigation } from '@react-navigation/native';


const BtnCancel = (props) => {

  const navigation = useNavigation();
  const { onPress, text, styleBtn, styleTextBtn } = props;
  return (
    <Button
      onPress={() => {
        navigation.navigate("FoodMenu")
      }}
      text={text}
      styleBtn={styleBtn}
      styleTextBtn={styleTextBtn}
    />
  );
};

export default BtnCancel;
