import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    centered:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    container:{
        width:340,
        height:342,
        borderRadius:20,
        backgroundColor:'#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
        justifyContent:'center',
        alignItems:'center',
        padding:23
    },

    text:{
        fontSize:16,
        color:'#505050',
        lineHeight:25,
        paddingTop:15,
        textAlign:'center'
    },

    buttonsContainer:{
        flexDirection:'row',
       
        marginTop:15,   
        postion:'relative',
        top:30,
    },

    button:{
        width:133,
        height:39,
        marginRight:12,
        marginLeft:12,
        borderRadius:20,
        backgroundColor:'#2E7622',
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
    },

    textButton:{
        color:'#FFFFFF',
    }


});