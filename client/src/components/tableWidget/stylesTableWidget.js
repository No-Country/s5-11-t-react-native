import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    //Hay que usar REDUX

    state:{
        width:8,
        height:8,
        borderRadius:50,
        position:'relative',
        top:11,
        left:8,
        zIndex:1
    },
    
    widgetContainer:{
        flexDirection:'row',
        alignItems:'center',
    },

    tableName:{
        marginLeft:5,
        color:'#FFFFFF',
        fontSize:14
    }


});
