import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 0.7,
    height: 150,
  },
  containerDish: {
    paddingLeft: '5%',
    width: '100%',
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageFrame: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: '5%',
  },
  image: {
    borderRadius: 50,
    width: '100%',
    height: '100%',
  },
  containerText: {
    flexDirection: 'colum',
    width: 100,
  },
  nameText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: '15%',
  },
  valueText: { color: '#EB7828', fontSize: 16 },
  containerQuantity: {
    flexDirection: 'colum',
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
