import {React, useState} from 'react';
import { Modal, Text, View, Image } from 'react-native';
import ButtonConfirmation from './ButtonConfirmation/ButtonConfirmation';
import { styles } from './stylesConfirmationModals';

const ConfirmationModal = (props) => {

    const [stateConfirmation, setStateConfirmation] = useState(true);
    const {
        confirmationOrder,
        setConfirmationOrder
      } = props;

    const hiddenModal = () =>{
        setConfirmationOrder(false)
       
    }

    return (
       <Modal
        visible={confirmationOrder ? true: false}
        transparent
        
       >
        <View style={styles.centered}>
            <View style={styles.container}>
                <Image source={stateConfirmation ? require('../../../assets/Icons/confirmationIcon.png') :require('../../../assets/Icons/confirmationError.png') }/>
                {stateConfirmation ? 
                <Text style={styles.text}>Tu pedido se ha realizado correctamente. Por favor cambiar el estado de la mesa. 
                </Text> :
                <Text style={styles.text}>Hubo un error en el proceso. Por favor vuelve a revisar que todo este en orden. 
                </Text>
                
                }
                <ButtonConfirmation
                    hiddenModal={hiddenModal} stateConfirmation = {stateConfirmation}
                />
            </View>
        </View>
        
       </Modal>
    );
}

export default ConfirmationModal;
