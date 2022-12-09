import { React, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './stylesCounter';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
const Counter = ({ item }) => {
  const { carrito, agregarProductoCarrito } = useContext(CartContext);

  const [valueQuantity, setValueQuantity] = useState(0);

  let plus = '+';
  let minus = '-';

  function onAdd() {
    const productoCarrito = {
      id: item._id,
      name: item.name,
      price: item.price,
      image: item.image,
      cantidad: valueQuantity,
    };
    agregarProductoCarrito(productoCarrito);
    console.log(carrito, 'carrito este es');
  }

  const onPressPlus = () => {
    setValueQuantity(valueQuantity + 1);
  };

  const onPressMinus = () => {
    if (valueQuantity <= 0) {
    } else if (valueQuantity > 0) {
      setValueQuantity(valueQuantity - 1);
    }
  };

  return (
    <View style={styles.botonContainer}>
      <View style={styles.containerQuantity}>
        <TouchableOpacity onPress={onPressPlus} style={styles.increaseBtn}>
          <Text style={styles.plusText}>{plus}</Text>
        </TouchableOpacity>
        <View style={styles.containerValueQuantity}>
          <Text style={styles.valueQuantity}>{valueQuantity}</Text>
        </View>
        <TouchableOpacity onPress={onPressMinus} style={styles.decreaseBtn}>
          <Text style={styles.minusText}>{minus}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.containerButtonConfirmation}
        onPress={onAdd}
      >
        <Text style={styles.text}>Añadir</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
