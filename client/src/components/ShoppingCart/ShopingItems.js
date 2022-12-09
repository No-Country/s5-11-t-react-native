import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "../FoodMenu/stylesScrollMenu";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartCounter from "../Counter/CartCounter";

const ShopingItems = () => {

  const {carrito} = useContext(CartContext);

  return (
   
    <FlatList
      data={carrito}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddinTop: 50 }}
      scrollEventThrottle={16}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <View
            key={item.id}
            style={styles.container}
          >
            <View
              style={styles.containerDish}>
              <TouchableOpacity
                style={styles.imageFrame}
              >
                <Image
                  style={styles.image}
                  source={{uri:item.image}}
                />
              </TouchableOpacity>
              <View
                style={styles.containerText}>
                <Text
                  style={styles.nameText}
                >
                  {item.name}
                </Text>
                <Text style={styles.valueText}>$ {item.price}</Text>
              </View>
              <CartCounter item={item}/>
              
            </View>
          </View>
        );
      }}
    />
  );
};

export default ShopingItems;
