import {React} from 'react';
import { Modal, Text, TouchableOpacity, View, Image } from 'react-native';
import ConfirmationModal from '../../ConfirmationModals/ConfirmationModal';
import { styles } from './stylesPreConfirmationModal';
const PreConfirmationModal = (props) => {
    const {
        confirmation,
        setConfirmation,
        onPressSuccess,
        confirmationOrder,
        setConfirmationOrder
    } = props;

  const hiddenModal = () => {
    setConfirmation(false);
  };

    const confirmationOrderFinal = () => {
        onPressSuccess()
        setConfirmation(false)
    }

 
    return (
        <>
     <ConfirmationModal confirmationOrder={confirmationOrder} setConfirmationOrder={setConfirmationOrder}/>
     <Modal
        visible={confirmation ? true : false}
        transparent
    >
        <View style={styles.centered}>
            <View style={styles.container}>
            <Image source={require('../../../../assets/Icons/questionIcon.png')}/>
            <Text style={styles.text} >Confirmar el pedido 
            </Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                    style={[styles.button, {backgroundColor:'#979797'}]}
                    onPress={hiddenModal}
                >
                    <Text style={styles.textButton}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.button, {backgroundColor:'#EB7828'}]}
                    onPress={confirmationOrderFinal}
                    >
                    <Text style={styles.textButton}>Si</Text>
                </TouchableOpacity>
            </View>
                
            </View>
        </View>
     </Modal>
     </>
    );
}

export default PreConfirmationModal;
