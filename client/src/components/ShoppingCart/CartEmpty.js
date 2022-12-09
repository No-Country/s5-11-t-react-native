import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from '../Button';
import { styles } from './stylesCartEmpty';
import { useNavigation } from '@react-navigation/native';
const CartEmpty = () => {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            
            <Image style={styles.image} source={require('../../../assets/CartEmpty/cartEmpty.png')}></Image>
            <Text style={styles.text}>No ha agregado ningún producto a su orden...</Text>

            <Button
            text="Regresar"
            styleBtn={styles.emptyBtn}
            styleTextBtn={styles.textBtn}
            onPress={() => {
                navigation.navigate('FoodMenu');
            }}
            />
        </View>
    );
}

export default CartEmpty;
