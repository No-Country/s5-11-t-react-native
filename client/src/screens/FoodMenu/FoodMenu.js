import React, { useState } from 'react';
import { View, Text, TextInput, Image, SafeAreaView } from 'react-native';
import ScrollCategory from '../../components/FoodMenu/ScrollCategory';
import ScrollMenu from '../../components/FoodMenu/ScrollMenu';
import { styles } from './stylesFoodMenu';

const FoodMenu = ({ navigation }) => {
  let textInputDefaultValue = 'Buscar plato ...';
  let textInputPlaceHolderColor = '#FFFFFF';
  let hamburgerMenu = require('../../../assets/FoodMenu/HamburgerMenu.png');
  let chimekYoonIcon = require('../../../assets/FoodMenu/ChimekYoonIcon.png');
 
  return (
    <SafeAreaView style={styles.menuContainer}>
      <Image style={styles.hamburgerMenu} source={hamburgerMenu} />
      <Image style={styles.logo} source={chimekYoonIcon} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Reserva tu comida</Text>
      </View>

      <TextInput
        style={styles.textInput}
        placeholder={textInputDefaultValue}
        placeholderTextColor={textInputPlaceHolderColor}
      />
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Categorías</Text>
      </View>
      <ScrollCategory />
      <ScrollMenu/>
  </SafeAreaView>
  );
};

export default FoodMenu;
