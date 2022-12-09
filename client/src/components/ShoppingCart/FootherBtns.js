import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import PreConfirmationModal from './PreConfirmationModal/PreConfirmationModal'
const FootherBtns = (props) => {
  const {
    styleContainerFootherBtns,
    styleAddBtn,
    styleTextAddBtn,
    styleConfirmBtn,
    styleTextConfirmBtn,
    textAddBtn,
    textConfirmBtn,
    confirmation,
    onPressConfirmation,
    onPressSuccess,
    setConfirmation,
    confirmationOrder,
    setConfirmationOrder
    
  } = props;

  const navigation=useNavigation();

  return (
    <View style={styleContainerFootherBtns}>
      <PreConfirmationModal 
        confirmation={confirmation} 
        setConfirmation={setConfirmation} 
        onPressSuccess={onPressSuccess}
        confirmationOrder={confirmationOrder}
        setConfirmationOrder={setConfirmationOrder}
      />
      <TouchableOpacity 
          style={styleAddBtn}
          onPress={()=>{
            navigation.navigate('FoodMenu')
          }}
        >
        <Text style={styleTextAddBtn}>{textAddBtn}</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styleConfirmBtn}
        onPress={onPressConfirmation} >
        <Text style={styleTextConfirmBtn}>{textConfirmBtn}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FootherBtns;
