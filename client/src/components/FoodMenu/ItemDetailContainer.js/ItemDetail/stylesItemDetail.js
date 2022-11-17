import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   
  
    containerItem: {
      backgroundColor:'#22191C',
      width:'100%',
      height:'80%',
      position:'absolute',
      bottom:0,
      borderTopStartRadius: 67,
      borderTopEndRadius: 67,
      alignItems:'center',
    },
  
    imageFrame: {
      
      borderColor: '#000000',
      borderRadius: 100,
      borderWidth: 5,
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
  
      elevation: 24,
      width: 152,
      height: 152,
      position:'relative',
      bottom:70
    },
  
    image: {
      borderRadius: 100,
      width: '100%',
      height: '100%',
    },

    ratingContainer:{
      flexDirection:'row',
      width:144,
      height:34,
      borderRadius:30,
      backgroundColor:'#FFFFFF',
      alignItems:'center',
      paddingLeft:10,
      marginLeft:13,
      alignSelf:'flex-start',
      position:'absolute',
      top:100,
     

    },

    starIcon:{
      marginRight:5,
     
    },

    

    headings: {
        flexDirection:'row',
        
    },

    name:{
        color:'#FFFFFF',
        fontSize:30,
        fontWeight:'500',
        paddingRight:125
    },

    price:{
        color:'#EB7828',
        fontSize:30,
        fontWeight:'500',
        paddingLeft:90
    },

    containerDescription:{
        
        
        paddingTop: 30,
        paddingLeft: 14,
        paddingRight: 30,
       
    },

    description:{
       
        textAlign:'left',
        color: '#FFFFFF',
        fontSize:16,
        fontWeight:'400',
        lineHeight:30,
        
    },


    containerCounter:{
      width:'100%',
      flexDirection:'row',
      borderBottomColor: '#FFFFFF',
      borderTopColor: '#FFFFFF',
      borderTopWidth: 0.7,
      borderBottomWidth: 0.7,
      height: 70,
      marginTop:60,
    },

    cantidad:{
      color:'#FFFFFF',
      fontSize:20,
      fontWeight:'500',
      paddingLeft:13,
      paddingRight:170,
      alignSelf:'center',
      
    }
   
  });