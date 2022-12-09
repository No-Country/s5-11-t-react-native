import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import { styles } from './stylesButtonConfirmation';

const ButtonConfirmation = (props) => {
    const {
        showModal
    } = props;

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={showModal}
            //disabled={true}
        >
          
            <Text style={styles.text}>Confirmar</Text>
        </TouchableOpacity>
    );
}

export default ButtonConfirmation;
