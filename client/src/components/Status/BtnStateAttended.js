import React from 'react';
import BtnState from './BtnState';
let stateAttended = require('../../../assets/StatusScreen/BotonEstadoAtendido.png');

const BtnStateAttended = (props) => {
  const { onPress, styleContainerBtnState } = props;
  return (
    <BtnState
      onPress={onPress}
      styleContainerBtnState={styleContainerBtnState}
      imgSate={stateAttended}
    />
  );
};

export default BtnStateAttended;
