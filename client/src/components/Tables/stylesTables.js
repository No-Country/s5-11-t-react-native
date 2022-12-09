import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   

    backgroundImage:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        paddingTop:120,
        alignItems:'center'
    },

    headingContainer:{
       
        flexDirection:'column',
        alignItems:'center'
    },

    
    heading: {
        marginTop:20,
        color:'#FFFFFF',
        textAlign:'center',
        fontSize:30,
        fontWeight:'500',
        lineHeight:35.8
       
    },

    //Select Bar

    selectBar:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        zIndex:1,
        width:339,
        height:51,
        borderRadius:10,
        marginTop:25,
    },  
    iconTable:{
        padding: 10,
        margin: 12,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
        
    },
    arrowContainer:{
        borderWidth: 0.5,
        borderBottomEndRadius:10,
        borderColor: '#000',
        height:'100%'
    },
    textContainer:{
        flex:1,
    },

    text:{
        fontSize:9,
        
    },

    mainText:{
        fontSize:16,
    },
    iconArrow:{
        
        margin: 13,
        position:'relative',
        top:5
    },
    
    listContainer:{
        flexGrow: 0,
        backgroundColor: '#fff',
        borderRadius:10,
        position:'relative',
        bottom:10,
        
        
    },

    itemList:{
        
        borderWidth: 0.5,
        borderColor: '#000',
        width:339,
        height:37,
        justifyContent:'space-between',
        alignItems:'flex-end',
        paddingLeft:8,
        paddingRight:8,
        paddingBottom:5,
        flexDirection:'row'
    },

    itemState:{
        fontSize:9,
    }

    

    
  
   
  });