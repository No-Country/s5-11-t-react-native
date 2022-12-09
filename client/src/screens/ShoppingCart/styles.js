import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22191C',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: { position: 'absolute', top: 45, right: '5%' },
  containerLogo: {
    paddingRight: '95%',
    paddingTop: '5%',
    marginBottom: '15%',
  },
  textInput: {
    color: '#FFFFFF',
    marginTop: '3%',
    marginLeft: '1%',
    marginRight: 'auto',
    width: '70%',
    height: '50%',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 10,
  },

  containerFootherShoppingCart: {
    width: '100%',
    height: '15%',
  },
  addNoteBtn: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    paddingTop: '8%',
    borderColor: '#D6D6D6',
    borderTopWidth: 0.8,
    borderBottomWidth: 0.8,
    paddingRight: '57%',
    paddingTop: '6%',
  },
  textBtn: { color: '#9F9B9B', fontSize: 20 },
  containerAddNote: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnSection: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '3%',
  },
  successBtn: {
    backgroundColor: '#008f39',
    paddingTop: '5%',
    width: 90,
    height: '40%',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: '8%',
  },
  cancelBtn: {
    backgroundColor: '#cc0000',
    paddingTop: '5%',
    width: 90,
    height: '40%',
    borderRadius: 10,
    alignItems: 'center',
  },

  textBtns: { color: '#FFFFFF', fontSize: 15, paddingTop: '5%' },
  containerNote: {
    width: '100%',
    height: '80%',
  },
  containerTotalOrder: {
    flexDirection: 'row',
    width: '100%',
    height: '6%',
    justifyContent:'space-between'
  },
  totalOrder: {
    color: '#FFFFFF',
    fontSize: 20,
    paddingLeft:'4%',
    position: 'relative',
    bottom: 10,
  },
  totalValueOrder: {
    color: '#EB7828',
    fontSize: 20,
    paddingRight:'6%',
    position: 'relative',
    bottom: 10,
  },
  footherBtns: {
    flexDirection: 'row',
    width: '100%',
    height: '15%',
  },
  addBtn: {
    width: '50%',
    height: '50%',
    backgroundColor: '#EB7828',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  
     
  },
  textAddBtn: {
    textAlign: 'center',
    
    color: '#FFFFFF',
    fontSize: 18,
    textTransform:'uppercase'
  },
  confirmBtn: {
    borderLeftColor: '#FFFFFF',
    borderLeftWidth: 1,
    width: '50%',
    height: '50%',
    backgroundColor: '#EB7828',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  textConfirmBtn: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    textTransform:'uppercase'
  },
});
