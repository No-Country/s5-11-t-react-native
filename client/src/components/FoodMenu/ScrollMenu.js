import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from './stylesScrollMenu';
import React, { useState } from 'react';
import Counter from '../Counter/Counter';
import { useNavigation } from '@react-navigation/native';

const ScrollMenu = ({ active, setProd, data }) => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);

  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddinTop: 50 }}
      scrollEventThrottle={16}
      renderItem={({ item }) => {
        return (
          <View
            key={item.id}
            style={active ? styles.containerHorizontal : styles.container}
          >
            <View
              style={
                active ? styles.containerDishHorizontal : styles.containerDish
              }
            >
              <TouchableOpacity
                style={active ? styles.imageFrameHorizontal : styles.imageFrame}
                onPress={() => {
                  navigation.navigate('ItemDetail');
                }}
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
              {active ? (
                ''
              ) : (
                <Counter
                  active={active}
                  item={item}
                  setItems={setItems}
                  items={items}
                  setProd={setProd}
                />
              )}
              {active && (
                <TouchableOpacity>
                  <Image
                    style={styles.removeIcon}
                    source={require('../../../assets/Icons/removeIcon.png')}
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

export default ScrollMenu;
