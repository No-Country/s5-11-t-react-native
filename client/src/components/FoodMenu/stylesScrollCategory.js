import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginLeft: '5%',
  },

  category: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingLeft: 10,
  },

  categoryContainerOrange: {
    backgroundColor: '#FCA162',
    width: 170,
    borderRadius: 47.6,
    marginRight: 30,
  },

  categoryContainerDark: {
    backgroundColor: '#050404',
    width: 170,
    borderRadius: 47.6,
    marginRight: 30,
  },

  imageFrame: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderRadius: 30,
    borderWidth: 3,
    width: 40,
    height: 40,
  },

  image: {
    borderRadius: 30,
    width: '100%',
    height: '100%',
  },

  name: {
    paddingLeft: 10,
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 14,
  },
});
