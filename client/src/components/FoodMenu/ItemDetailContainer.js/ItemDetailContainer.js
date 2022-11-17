import React from 'react';
import { SafeAreaView, Image, TouchableOpacity, View, Text} from 'react-native';
import ItemDetail from './ItemDetail/ItemDetail';
import { styles } from './stylesItemDetailContainer';

const ItemDetailContainer = () => {

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.cartContainer}>
            <Image style ={styles.cart} source={require('../../../../assets/Icons/Cart.png')}/>
          </TouchableOpacity>
        <ItemDetail/>
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.optionContainer}>
            <Image  source={require('../../../../assets/Icons/Basket.png')}/>
            <Text style={styles.footerText}>Volver</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <Image  source={require('../../../../assets/Icons/Cart.png')}/>
            <Text style={styles.footerText}>Añadir</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}

export default ItemDetailContainer;
