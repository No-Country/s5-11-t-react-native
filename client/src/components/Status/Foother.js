import React from 'react';
import { View, StyleSheet } from 'react-native';
import BtnCancel from './btnCancel';
import BtnSafe from './BtnSafe';

const Foother = (props) => {
  const {
    onPressCancel,
    onPressSafe,
    textCancel,
    textSafe,
    styleBtnCancel,
    styleBtnSafe,
    styleTextBtnCancel,
    styleTextBtnSafe,
    styleContainerFoother,
  } = props;
  return (
    <View style={styleContainerFoother}>
      <BtnCancel
        onPress={onPressCancel}
        text={textCancel}
        styleBtn={styleBtnCancel}
        styleTextBtn={styleTextBtnCancel}
      />
      <BtnSafe
        onPress={onPressSafe}
        text={textSafe}
        styleBtn={styleBtnSafe}
        styleTextBtn={styleTextBtnSafe}
      />
    </View>
  );
};

export default Foother;
