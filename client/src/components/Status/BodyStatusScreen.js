import { View, Text } from 'react-native';
import React from 'react';

const BodyStatusScreen = (props) => {
  const {
    styleBodyContainer,
    title,
    subTitleOne,
    subTitleTwo,
    styleTitle,
    styleSubtitleOne,
    styleSubtitleTwo,
    statusComponent,
    btnStateAttendedComponent,
    btnStateBeingAttendedComponent,
    state,
  } = props;

  return (
    <View style={styleBodyContainer}>
      <Text style={styleTitle}>{title}</Text>
      {statusComponent}
      <Text style={styleSubtitleOne}>{subTitleOne}</Text>
      <Text style={styleSubtitleTwo}>{subTitleTwo}</Text>
      {!state ? btnStateBeingAttendedComponent : btnStateAttendedComponent}
    </View>
  );
};

export default BodyStatusScreen;
