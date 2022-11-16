import {React, useState} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './stylesCounter';
const Counter = () => {

    const [valueQuantity, setValueQuantity] = useState(0);

    const onPressPlus = () => {
      setValueQuantity(valueQuantity + 1);
    };
  
    const onPressMinus = () => {
      if (valueQuantity <= 0) {
      } else if (valueQuantity > 0) {
        setValueQuantity(valueQuantity - 1);
      } else {
      }
    };

    return (
       <View style={styles.containerQuantity}>
                <TouchableOpacity
                  onPress={onPressPlus}
                  style={styles.increaseBtn}
                >
                  <Text style={styles.plusText}>+</Text>
                </TouchableOpacity>
                <View style={styles.containerValueQuantity}>
                  <Text style={styles.valueQuantity}>{valueQuantity}</Text>
                </View>
                <TouchableOpacity
                  onPress={onPressMinus}
                  style={styles.decreaseBtn}
                >
                  <Text style={styles.minusText}>-</Text>
                </TouchableOpacity>
        </View>
    );
}

export default Counter;
