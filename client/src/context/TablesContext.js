import React, { createContext, useState } from 'react';

export const TablesContext = createContext();

export const TablesContextProvider = (props) => {
  const [state, setState] = useState('#FF4444');

  const [selectedItem, setSelectedItem] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [btnActive, setBtnActive] = useState(false);

  const data = [
    { id: 1, label: 'Mesa 1', availability: 'Disponible', state: state },
    { id: 2, label: 'Mesa 2', availability: 'No disponible', state: state },
    { id: 3, label: 'Mesa 3', availability: 'Disponible', state: state },
    { id: 4, label: 'Mesa 4', availability: 'Disponible', state: state },
    { id: 5, label: 'Mesa 5', availability: 'Disponible', state: state },
    { id: 6, label: 'Mesa 6', availability: 'Disponible', state: state },
    { id: 7, label: 'Mesa 7', availability: 'Disponible', state: state },
    { id: 8, label: 'Mesa 8', availability: 'Disponible', state: state },
  ];

  const onSelect = (item) => {
    setSelectedItem(item);
  };

  const onSelectedItem = (item) => {
    setShowOptions(false);
    onSelect(item);
    setBtnActive(true);
  };

  let value = selectedItem;

  return (
    <>
      <TablesContext.Provider
        value={{
          data,
          btnActive,
          onSelectedItem,
          setShowOptions,
          showOptions,
          value,
          setState,
          state,
        }}
      >
        {props.children}
      </TablesContext.Provider>
    </>
  );
};
