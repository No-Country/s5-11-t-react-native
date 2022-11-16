import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  containerQuantity: {
    flexDirection: 'column',
    marginLeft: '25%',
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
  plusText: {
    borderRadius: 30,
    width: 40,
    height: 40,
    color: '#FFFFFF',
    fontSize: 30,
    paddingLeft: '28%',
  },
  minusText: {
    borderRadius: 30,
    width: 40,
    height: 40,
    color: '#050404',
    fontSize: 30,
    paddingLeft: '33%',
  },
  valueQuantity: {
    color: '#FFFFFF',
    fontSize: 30,
  },
});
