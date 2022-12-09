import Button from '../Button';
import React from 'react';

const TouchableAddNote = (props) => {
  const { text, styleBtn, styleTextBtn, onPress } = props;
  return (
    <Button
      text={text}
      styleBtn={styleBtn}
      styleTextBtn={styleTextBtn}
      onPress={onPress}
    />
  );
};

export default TouchableAddNote;
