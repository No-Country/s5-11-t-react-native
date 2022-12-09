import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22191C',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  logo: {
    position: 'absolute',
    top: 45,
    right: '5%',
  },
  bodyContainer: {
    flexDirection: 'column',
    marginTop: '20%',
    paddingLeft: '5%',
    paddingRight: '5%',
    marginBottom: '20%',
  },
  statusInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '15%',
  },
  state: { flexDirection: 'row', alignItems: 'center', marginLeft: '5%' },
  stateText: { paddingLeft: '2%', fontSize: 12, color: '#FFFFFF' },
  title: {
    fontSize: 30,
    color: '#FFFFFF',
    paddingLeft: '5%',
    marginBottom: '5%',
  },
  subTitleOne: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: '5%',
  },
  subTitleTwo: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: '20%',
  },
  containerBtnState: {
    alignItems: 'center',
  },
  btnCancel: {
    width: 150,
    height: 43,
    backgroundColor: '#C0C0C0',
    borderRadius: 20,
    shadowColor: '#000',
    marginRight: '10%',
    shadowOffset: {
      width: 0,
      height: 12,
    },
  },
  btnSafe: {
    width: 150,
    height: 43,
    backgroundColor: '#FFA566',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
  },
  textBtn: {
    color: '#FFFFFF',
    textAlign: 'center',
    paddingTop: '7%',
    fontSize: 16,
  },
  containerFoother: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
