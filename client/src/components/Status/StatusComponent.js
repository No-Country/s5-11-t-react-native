import { View, Text, Image } from 'react-native';
import React from 'react';

const StatusComponent = (props) => {
  const {
    styleStatusInfoContainer,
    styleState,
    styleStateText,
    imgAttended,
    imgBeingAttended,
    imgUnattended,
    textAttended,
    textBeingAttended,
    textUnattended,
  } = props;
  return (
    <View style={styleStatusInfoContainer}>
      <View style={styleState}>
        <Image source={imgAttended} />
        <Text style={styleStateText}>{textAttended} </Text>
      </View>
      <View style={styleState}>
        <Image source={imgBeingAttended} />
        <Text style={styleStateText}>{textBeingAttended} </Text>
      </View>
      <View style={styleState}>
        <Image source={imgUnattended} />
        <Text style={styleStateText}>{textUnattended} </Text>
      </View>
    </View>
  );
};

export default StatusComponent;
