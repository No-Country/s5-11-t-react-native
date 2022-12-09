import React from 'react';
import { SafeAreaView, Image, TouchableOpacity, View, Text} from 'react-native';
import ItemDetail from './ItemDetail/ItemDetail';
import { styles } from './stylesItemDetailContainer';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useContext } from "react";
import { CartContext } from '../../../context/CartContext';
import { useState } from 'react';
const ItemDetailContainer = () => {
  const {carrito, agregarProductoCarrito} = useContext(CartContext);
  const route = useRoute();
  const navigation = useNavigation();
  const item = route.params.item
  const [valueQuantity, setValueQuantity] = useState(0);
  
    function onAdd(){
      const productoCarrito = {id: item._id, name: item.name, price:item.price, image: item.image, cantidad: valueQuantity}
      agregarProductoCarrito(productoCarrito)
      console.log(carrito,"carrito este es")
      navigation.navigate("ShoppingCart")

  }

  

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.cartContainer}
        onPress={() => {
          navigation.navigate("ShoppingCart");
        }}
        >
            <Image style ={styles.cart} source={require('../../../../assets/Icons/Cart.png')}/>
          </TouchableOpacity>
        <ItemDetail item={item} valueQuantity={valueQuantity} setValueQuantity={setValueQuantity}/>
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.optionContainer}
           onPress={() => {
            navigation.navigate("MyTabs");
          }}
          >
            <Image  source={require('../../../../assets/Icons/Basket.png')}/>
            <Text style={styles.footerText}>Volver</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.optionContainer}
            onPress={onAdd}
          >
            <Image  source={require('../../../../assets/Icons/Cart.png')}/>
            <Text style={styles.footerText}>Añadir</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}

export default ItemDetailContainer;
