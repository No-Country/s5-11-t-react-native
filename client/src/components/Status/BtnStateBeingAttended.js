import React from 'react';
import BtnState from './BtnState';
let stateBeingAttended = require('../../../assets/StatusScreen/BotonEstadoSiendoAtendido.png');
const BtnStateBeingAttended = (props) => {
  const { onPress, styleContainerBtnState } = props;
  return (
    <BtnState
      onPress={onPress}
      styleContainerBtnState={styleContainerBtnState}
      imgSate={stateBeingAttended}
    />
  );
};

export default BtnStateBeingAttended;
