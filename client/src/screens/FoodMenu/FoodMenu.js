import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import ButtonConfirmation from '../../components/FoodMenu/ButtonConfirmation/ButtonConfirmation';
import MenuModal from '../../components/FoodMenu/MenuModal/MenuModal';
import ScrollCategory from '../../components/FoodMenu/ScrollCategory';
import ScrollMenu from '../../components/FoodMenu/ScrollMenu';
import TableWidget from '../../components/tableWidget/tableWidget';
import axios from 'axios';
import { styles } from './stylesFoodMenu';

const FoodMenu = ({ navigation }) => {
  let textInputDefaultValue = 'Buscar plato ...';
  let textInputPlaceHolderColor = '#FFFFFF';
  let hamburgerMenu = require('../../../assets/FoodMenu/HamburgerMenu.png');
  let chimekYoonIcon = require('../../../assets/FoodMenu/ChimekYoonIcon.png');

  const [confirmation, setConfirmation] = useState(false);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');

  const showModal = () => {
    setConfirmation(true);
  };

  const getItems = async () => {
    const API_URL_CATEG =
      'https://s5-11-t-react-native.up.railway.app/api/categories';
    const API_URL_ITEMS =
      'https://s5-11-t-react-native.up.railway.app/api/item';
    try {
      const category = await axios.get(API_URL_CATEG);
      const items = await axios.get(API_URL_ITEMS);
      setCategories(category.data);
      setData(items.data);
      console.log(category.data);
    } catch (error) {}
  };

  const getFilteredMenu = async (id) => {
    const API_URL_CATEG =
      'https://s5-11-t-react-native.up.railway.app/api/categories/';
    try {
      const value = await axios.get(API_URL_CATEG + id);
      setData(value.data.items);
    } catch (error) {}
  };

  const searcItem = async () => {
    const API_URL_ITEM =
      'https://s5-11-t-react-native.up.railway.app/api/item/';
    try {
      const value = await axios.get(API_URL_ITEM + search);
      setData(value.data);
    } catch (error) {}
  };

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    searcItem();
  }, [search]);

  return (
    <SafeAreaView style={styles.menuContainer}>
      <MenuModal
        confirmation={confirmation}
        setConfirmation={setConfirmation}
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
        onChangeText={setSearch}
        value={search}
      />
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Categorías</Text>
      </View>
      <ScrollCategory data={categories} filterInfo={getFilteredMenu} />
      <ScrollMenu data={data} />
    </SafeAreaView>
  );
};

export default FoodMenu;
