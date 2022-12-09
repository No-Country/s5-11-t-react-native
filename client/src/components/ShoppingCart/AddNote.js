import { View, TextInput } from 'react-native';
import Button from '../Button';
import React from 'react';

const AddNote = (props) => {
  const {
    styleTextInput,
    placeHolder,
    placeholderTextColor,
    styleContainerAddNote,
    styleBtnSection,
    styleSuccessBtn,
    styleCancelBtn,
    styleTextBtn,
    onPressSuccess,
    onPressCancel,
  } = props;
  return (
    <View style={styleContainerAddNote}>
      <TextInput
        //onChange={(value) => setNote(value)}
        style={styleTextInput}
        placeholder={placeHolder}
        placeholderTextColor={placeholderTextColor}
      />
      <View style={styleBtnSection}>
        <Button
          text="Añadir"
          styleBtn={styleSuccessBtn}
          styleTextBtn={styleTextBtn}
          onPress={onPressSuccess}
        />
        <Button
          text="Cancelar"
          styleBtn={styleCancelBtn}
          styleTextBtn={styleTextBtn}
          onPress={onPressCancel}
        />
      </View>
    </View>
  );
};

export default AddNote;
