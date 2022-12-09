import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const ButtonTable = (props) => {
    const { onPress, text, btnActive } = props;
    

  return (
    <TouchableOpacity onPress={onPress} style={
        !btnActive
          ? styles.tableBtnDisabled
          : styles.tableBtn
      } disabled={!btnActive}>
      <Text style={styles.textBtn}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
tableBtn:{
    backgroundColor: '#EB7828',
    width: 236,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    paddingTop: 10,
    position:'absolute',
    top:660
    
},
tableBtnDisabled: {
    
    backgroundColor: '#BF8C69',
    width: 236,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    paddingTop: 10,
    position:'absolute',
    top:660
   
  },
  textBtn: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight:'500'
  },
});
export default ButtonTable;
