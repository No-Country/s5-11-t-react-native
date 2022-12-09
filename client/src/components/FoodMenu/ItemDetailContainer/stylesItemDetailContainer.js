import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EB7828',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  

  cartContainer:{
      
    alignItems: 'center',
    
  },

  cart:{
    position:'absolute',
    right:0,
    marginTop:65,
    marginRight:20
    
  },

  footerText:{
    color:'#FFFFFF',
    textTransform:'uppercase',
    marginLeft:10
  },

  footerContainer:{
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignItems:'center',
    width:440,
    height:80,
    backgroundColor:'#EB7828',
    borderTopStartRadius:77,
    borderTopEndRadius:77,
    alignSelf:'center'
  },

  optionContainer:{
    width:'50%',
    alignItems:'center',
    justifyContent:'center',
    fontSize:18,
    fontWeight:500,
    height:80,
    borderEndWidth:1,
    borderColor:'#BCB3B3',
    borderStartWidth:1,
    flexDirection:'row'
   
  }
 
});