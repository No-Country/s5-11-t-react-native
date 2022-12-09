import { Image, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './stylesStatusScreen';
import StatusComponent from '../../components/Status/StatusComponent';
import Foother from '../../components/Status/Foother';
import BodyStatusScreen from '../../components/Status/BodyStatusScreen';
import BtnStateAttended from '../../components/Status/BtnStateAttended';
import BtnStateBeingAttended from '../../components/Status/BtnStateBeingAttended';
let chimekYoonIcon = require('../../../assets/FoodMenu/ChimekYoonIcon.png');
let attended = require('../../../assets/StatusScreen/EstadoAtendido.png');
let beingAttended = require('../../../assets/StatusScreen/EstadoSiendoAtendido.png');
let unattended = require('../../../assets/StatusScreen/EstadoNoAtendido.png');
let textAttended = 'Atendida';
let textBeingAttended = 'Siendo atendida';
let textUnattended = 'Sin atender';
let title = 'Mesas';
let subTitleOne = 'Estado Actual de la mesa';
let subTitleTwo =
  '(Se recomienda cambiar el estado luego de realizar la acción)';
let textCancel = 'Cancelar';
let textSafe = 'Guardar cambios';
import { useContext } from 'react';
import { TablesContext } from '../../context/TablesContext';
import { useNavigation } from '@react-navigation/native';
const StatusScreen = () => {

  const navigation = useNavigation();

  const {state,setState} = useContext(TablesContext);

  const [stateTable, setStateTable] = useState(false);
  const onPressBtnStateBeingAttended = () => {
    setStateTable(true);
  };

  const onPressBtnStateAttended = () => {
    setStateTable(false);
  };
  const onPressSafe = () =>{
    !stateTable?setState("#FFD952"):setState("#8DFF65")
    navigation.navigate("FoodMenu")
    console.log(state)
  }

  return (
    <SafeAreaView style={styles.container}>
      <>
        <Image style={styles.logo} source={chimekYoonIcon} />
      </>
      <BodyStatusScreen
        title={title}
        subTitleOne={subTitleOne}
        subTitleTwo={subTitleTwo}
        styleBodyContainer={styles.bodyContainer}
        styleTitle={styles.title}
        styleSubtitleOne={styles.subTitleOne}
        styleSubtitleTwo={styles.subTitleTwo}
        state={stateTable}
        statusComponent={
          <StatusComponent
            styleStatusInfoContainer={styles.statusInfoContainer}
            styleState={styles.state}
            styleStateText={styles.stateText}
            imgAttended={attended}
            imgBeingAttended={beingAttended}
            imgUnattended={unattended}
            textAttended={textAttended}
            textBeingAttended={textBeingAttended}
            textUnattended={textUnattended}
          />
        }
        btnStateAttendedComponent={
          <BtnStateAttended
            onPress={onPressBtnStateAttended}
            styleContainerBtnState={styles.containerBtnState}
          />
        }
        btnStateBeingAttendedComponent={
          <BtnStateBeingAttended
            onPress={onPressBtnStateBeingAttended}
            styleContainerBtnState={styles.containerBtnState}
          />
        }
      />
      <Foother
        textCancel={textCancel}
        textSafe={textSafe}
        styleBtnCancel={styles.btnCancel}
        styleBtnSafe={styles.btnSafe}
        styleTextBtnCancel={styles.textBtn}
        styleTextBtnSafe={styles.textBtn}
        styleContainerFoother={styles.containerFoother}
        onPressSafe={onPressSafe}
      />
    </SafeAreaView>
  );
};

export default StatusScreen;
