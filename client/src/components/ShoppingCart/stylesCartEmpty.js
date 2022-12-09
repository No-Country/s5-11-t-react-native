import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({

    container:{
        backgroundColor: '#22191C',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent:'center',
        alignItems:'center'
    },

    text:{
        color:'#FFFFFF',
        fontSize:20,
        textAlign:'center',
        paddingLeft:'10%',
        paddingRight:'10%'
    },

    image:{
        height:280,
        width:375
    },

    emptyBtn: {
        backgroundColor: '#EB7828',
        width: 200,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        paddingTop: 6,
        marginTop:40
      },
    textBtn: {
        color: '#FFFFFF',
        fontSize: 25,
      },
});