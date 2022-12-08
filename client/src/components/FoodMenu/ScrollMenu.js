import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from './stylesScrollMenu';
import React, { useState } from 'react';
import Counter from '../Counter/Counter';
import { useNavigation } from '@react-navigation/native';

const ScrollMenu = ({ data }) => {
  const navigation = useNavigation();


  console.log(data, "holaa esta es data" )
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
                <Image style={styles.image} source={{ uri: item.item.image }} />
              </TouchableOpacity>
              <View style={styles.containerText}>
                <Text style={styles.nameText}>{item.item.name}</Text>
                <Text style={styles.valueText}>$ {item.item.price}</Text>
              </View>
              <Counter item={item} setItems={setItems} items={items} />
            </View>
          </View>
        );
      }}
    />
  );
};

export default ScrollMenu;
