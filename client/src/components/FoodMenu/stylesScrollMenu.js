import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 0.7,
    height: 150,
    width: Dimensions.get('window').width,
  
  },
  containerDish: {
    paddingLeft: '5%',
    width: '100%',
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageFrameHorizontal: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: '10%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,
    elevation: 24,
  },
  imageFrame: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,
    elevation: 24,
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
    flexDirection: 'column',
    width: 100,
  },
  nameText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: '15%',
  },
  valueText: {
    color: '#EB7828',
    fontSize: 16,
  },

  
});
