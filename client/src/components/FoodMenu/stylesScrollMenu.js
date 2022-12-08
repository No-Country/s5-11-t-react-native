import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 0.7,
    height: 150,
  },
  containerDish: {
    paddingLeft: '5%',
    width: '100%',
    height: 130,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerHorizontal: {
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 0.7,
    height: 150,
    width: '100%',
  },
  containerDishHorizontal: {
    height: 130,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageFrameHorizontal: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: '22%',
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
  imageHorizontal: {
    borderRadius: 50,
    width: '100%',
    height: '100%',
    marginLeft: '10%',
  },
  image: {
    borderRadius: 50,
    width: '100%',
    height: '100%',
  },
  containerTextHorizontal: {
    flexDirection: 'column',
    width: 200,
  },
  containerText: {
    flexDirection: 'column',
    width: 100,
  },
  nameTextHorizontal: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: '15%',
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

  removeIcon: {
    position: 'relative',
    right: 30,
  },
});
