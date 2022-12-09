import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './stylesButtonConfirmation';

const ButtonConfirmation = (props) => {

    const {
       hiddenModal,
       stateConfirmation
      } = props;

    return (
        <TouchableOpacity 
            style={stateConfirmation ? styles.container : [styles.container, {backgroundColor:'#F15757'}]}
            onPress={hiddenModal}
        >
            <Text style={styles.text}>Continuar</Text>
        </TouchableOpacity>
    );
}

export default ButtonConfirmation;
