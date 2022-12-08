import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "../FoodMenu/stylesScrollMenu";
import React from "react";
import Counter from "../Counter/Counter";
import { useSelector } from "react-redux";

const ShopingItems = ({ active }) => {
  /*   const menu = [
    {
      id: 1,
      name: "Papacheddar",
      price: "$ 3.00",
      image: require("../../../assets/Home/principal.png"),
    },
    {
      id: 2,
      name: "20 Alitas",
      price: "$ 13.50",
      image: require("../../../assets/Home/principal.png"),
    },
    {
      id: 3,
      name: "Chimek Burguer",
      price: "$ 4.85",
      image: require("../../../assets/Home/principal.png"),
    },
    {
      id: 4,
      name: "Dakanjeong",
      price: "$ 5.00",
      image: require("../../../assets/Home/principal.png"),
    },
    {
      id: 5,
      name: "Banderilla Mixta",
      price: "$ 1.50",
      image: require("../../../assets/Home/principal.png"),
    },
    {
      id: 6,
      name: "Pop Corn Mediano",
      price: "$ 4.25",
      image: require("../../../assets/Home/principal.png"),
    },
  ]; */
  const cart = useSelector((state) => state.cart);
/*   console.log(cart, "data redux") */

  return (
    <FlatList
      data={cart}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddinTop: 50 }}
      scrollEventThrottle={16}
      /* keyExtractor={(item) => item.id} */
      renderItem={({ item }) => {
        return (
          <View
            key={item._id}
            style={active ? styles.containerHorizontal : styles.container}
          >
            <View
              style={
                active ? styles.containerDishHorizontal : styles.containerDish
              }
            >
              <TouchableOpacity
                style={active ? styles.imageFrameHorizontal : styles.imageFrame}
              >
                <Image
                  style={active ? styles.imageHorizontal : styles.image}
                  source={item.image}
                />
              </TouchableOpacity>
              <View
                style={
                  active ? styles.containerTextHorizontal : styles.containerText
                }
              >
                <Text
                  style={active ? styles.nameTextHorizontal : styles.nameText}
                >
                  {item.name}
                </Text>
                <Text style={styles.valueText}>{item.price}</Text>
              </View>
              <Counter active={active} />
              {active && (
                <TouchableOpacity>
                  <Image
                    style={styles.removeIcon}
                    source={require("../../../assets/Icons/removeIcon.png")}
                  ></Image>
                </TouchableOpacity>
              )}
            </View>
          </View>
        );
      }}
    />
  );
};

export default ShopingItems;
