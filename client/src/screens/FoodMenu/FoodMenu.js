import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import ButtonConfirmation from '../../components/FoodMenu/ButtonConfirmation/ButtonConfirmation';
import MenuModal from '../../components/FoodMenu/MenuModal/MenuModal';
import ScrollCategory from '../../components/FoodMenu/ScrollCategory';
import ScrollMenu from '../../components/FoodMenu/ScrollMenu';
import TableWidget from '../../components/tableWidget/tableWidget';
import { addItem } from '../../features/cart/cartSlice';
import { styles } from './stylesFoodMenu';
import { useGetTodosQuery } from '../../features/items/itemSlice';

const FoodMenu = ({ navigation, items }) => {
  let textInputDefaultValue = 'Buscar plato ...';
  let textInputPlaceHolderColor = '#FFFFFF';
  let hamburgerMenu = require('../../../assets/FoodMenu/HamburgerMenu.png');
  let chimekYoonIcon = require('../../../assets/FoodMenu/ChimekYoonIcon.png');

  const { data } = useGetTodosQuery();
  const [confirmation, setConfirmation] = useState(false);
  const [prod, setProd] = useState();
  const dispatch = useDispatch();

  const showModal = () => {
    setConfirmation(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    prod
      ? dispatch(addItem(prod)) &&
        Alert.alert('Tus productos fueron agregados al carrito!', '', [
          { text: 'Aceptar', onPress: () => setConfirmation(false) },
        ])
      : Alert.alert('Ey!', 'Debes seleccionar al menos 1 producto', [
          {
            text: 'Aceptar',
            onPress: () => setConfirmation(false),
          },
        ]);
  };
  //navigation.navigate("ShoppingCart")
  return (
    <SafeAreaView style={styles.menuContainer}>
      <MenuModal
        confirmation={confirmation}
        setConfirmation={setConfirmation}
        onPress={handleSubmit}
      />
      <TouchableOpacity style={styles.hamburgerMenuContainer}>
        <Image source={hamburgerMenu} />
      </TouchableOpacity>

      <Image style={styles.logo} source={chimekYoonIcon} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Reserva tu comida</Text>
        <TableWidget />
      </View>

      <TextInput
        style={styles.textInput}
        placeholder={textInputDefaultValue}
        placeholderTextColor={textInputPlaceHolderColor}
      />
      <ButtonConfirmation showModal={showModal} />

      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Categorías</Text>
      </View>
      <ScrollCategory />
      <ScrollMenu active={false} setProd={setProd} data={data} />
    </SafeAreaView>
  );
};

export default FoodMenu;
