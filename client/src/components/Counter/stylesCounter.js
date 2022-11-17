import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  containerQuantity: {
    flexDirection: 'column',
    marginLeft: '25%',
   
  },
  containerQuantityHorizontal: {
    flexDirection: 'row',
    alignSelf:'center'
   
  },
  increaseBtn: {
    borderRadius: 30,
    width: 40,
    height: 40,
    backgroundColor: '#FCA162',
    alignItems: 'center',
  },
  decreaseBtn: {
    borderRadius: 30,
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  containerValueQuantity: {
    width: 40,
    height: 40,
    alignItems: 'center',
    paddingTop: '5%',
  },
  containerValueQuantityHorizontal: {
    width: 40,
    height: 40,
    alignItems: 'center',
 
  },
  plusText: {
    borderRadius: 30,
    width: 40,
    height: 40,
    color: '#FFFFFF',
    fontSize: 30,
    paddingLeft: '29%',
    
  },
  minusText: {
    borderRadius: 30,
    width: 40,
    height: 40,
    color: '#050404',
    fontSize: 30,
    paddingLeft: '39%',
  },
  valueQuantity: {
    color: '#FFFFFF',
    fontSize: 30,
  },
  valueQuantityHorizontal: {
    color: '#FFFFFF',
    fontSize: 25,
  },
});