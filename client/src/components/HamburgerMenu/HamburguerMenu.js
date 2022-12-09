import { TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import hamburgerMenu from "../../../assets/FoodMenu/HamburgerMenu.png";

const HamburguerMenu = () => {
  return (
    <TouchableOpacity style={styles.hamburgerMenuContainer}>
      <Image source={hamburgerMenu} />
    </TouchableOpacity>
  );
};

export default HamburguerMenu;
