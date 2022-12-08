import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from './stylesScrollMenu';
import React, { useState } from 'react';
import Counter from '../Counter/Counter';
import { useNavigation } from '@react-navigation/native';
import { useGetTodosQuery } from '../../features/items/itemSlice';

const ScrollMenu = () => {
  const navigation = useNavigation();
  const { data } = useGetTodosQuery();
  const [items, setItems] = useState([]);

  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddinTop: 50 }}
      scrollEventThrottle={16}
      renderItem={({ item }) => {
        return (
          <View key={item.id} style={styles.container}>
            <View style={styles.containerDish}>
              <TouchableOpacity
                style={styles.imageFrame}
                onPress={() => {
                  navigation.navigate('ItemDetail', {
                    item: item,
                  });
                }}
              >
                <Image style={styles.image} source={item.image} />
              </TouchableOpacity>
              <View style={styles.containerText}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.valueText}>{item.price}</Text>
              </View>
              <Counter item={item} setItems={setItems} items={items} />
              {/* <TouchableOpacity>
                <Image
                  style={styles.removeIcon}
                  source={require('../../../assets/Icons/removeIcon.png')}
                ></Image>
              </TouchableOpacity> */}
            </View>
          </View>
        );
      }}
    />
  );
};

export default ScrollMenu;
