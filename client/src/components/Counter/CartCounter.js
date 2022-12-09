import {React, useState} from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { styles } from './stylesCounter';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
const CartCounter = ({item}) => {

    console.log(item, "esto es item")
    const {sumarCarrito, restarCarrito, quitarProductoCarrito} = useContext(CartContext)

    //const indice = carrito.findIndex(i => i.id === item.id)

    //const [valueQuantity, setValueQuantity] = useState(carrito[indice].cantidad);

    const onPressPlus = () => {
        sumarCarrito(item)
    };
  
    const onPressMinus = () => {
        restarCarrito(item)
    };

    const removeProduct = () => {
        quitarProductoCarrito(item)
    }

    return (
        <View>
            <View style={styles.containerQuantityHorizontal}>
                    <TouchableOpacity
                    onPress={onPressMinus}
                    style={styles.decreaseBtn}
                    >
                    <Text style={styles.minusText}>-</Text>
                    </TouchableOpacity>
                    <View style={styles.containerValueQuantityHorizontal}>
                    <Text style={styles.valueQuantityHorizontal}>{item.cantidad}</Text>
                    </View>
                    <TouchableOpacity
                    onPress={onPressPlus}
                    style={styles.increaseBtn}
                    >
                    <Text style={styles.plusText}>+</Text>
                    </TouchableOpacity>
                    
            </View>

            <TouchableOpacity
                onPress={removeProduct}
            >
                  <Image
                    style={styles.removeIcon}
                    source={require("../../../assets/Icons/removeIcon.png")}
                  ></Image>
            </TouchableOpacity>


        </View>
     
    );
}

export default CartCounter;
