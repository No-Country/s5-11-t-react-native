import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22191C',
    height: '130%',
    width: '100%',
    position: 'absolute',
    top: 300,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,
    elevation: 24,
  },
  description: {
    alignItems: 'center',
    color: '#FFFFFF',
    paddingLeft: 20,
    paddingRight: 10,
    paddingTop: 30,
  },
  headingContainer: {
    paddingTop: 50,
  },
  heading1: {
    color: '#FFFFFF',
    fontSize: 35,
    fontWeight: '700',
    lineHeight: 50,
    textAlign: 'center',
    justifyContent: 'center',
  },
  heading2: {
    color: '#EB7828',
    fontSize: 35,
    fontWeight: '700',
    lineHeight: 50,
    textAlign: 'center',
  },
  homeBtn: {
    backgroundColor: '#EB7828',
    width: 200,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    paddingTop: 10,
    marginLeft: '25%',
    marginTop: '10%',
  },
  textBtn: {
    color: '#FFFFFF',
    fontSize: 25,
  },
});
