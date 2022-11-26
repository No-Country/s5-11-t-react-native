import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from './stylesScrollMenu';
import React from 'react';
import Counter from '../Counter/Counter';
import { useNavigation } from '@react-navigation/native';

const ScrollMenu = ({ onPressPlus, onPressMinus, valueQuantity, active }) => {
  const navigation = useNavigation();

  const menu = [
    {
      id: 1,
      name: 'Papacheddar',
      precio: '$ 3.00',
      thumbnail: require('../../../assets/Home/principal.png'),
    },
    {
      id: 2,
      name: '20 Alitas',
      precio: '$ 13.50',
      thumbnail: require('../../../assets/Home/principal.png'),
    },
    {
      id: 3,
      name: 'Chimek Burguer',
      precio: '$ 4.85',
      thumbnail: require('../../../assets/Home/principal.png'),
    },
    {
      id: 4,
      name: 'Dakanjeong',
      precio: '$ 5.00',
      thumbnail: require('../../../assets/Home/principal.png'),
    },
    {
      id: 5,
      name: 'Banderilla Mixta',
      precio: '$ 1.50',
      thumbnail: require('../../../assets/Home/principal.png'),
    },
    {
      id: 6,
      name: 'Pop Corn Mediano',
      precio: '$ 4.25',
      thumbnail: require('../../../assets/Home/principal.png'),
    },
  ];

  return (
    <FlatList
      data={menu}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddinTop: 50 }}
      scrollEventThrottle={16}
      keyExtractor={(item) => item.id}
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
                  source={item.thumbnail}
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
                <Text style={styles.valueText}>{item.precio}</Text>
              </View>
              <Counter active={active} />
            </View>
          </View>
        );
      }}
    />
  );
};

export default ScrollMenu;