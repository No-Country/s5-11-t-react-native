import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './stylesScrollCategory';

const ScrollCategory = ({data,filterInfo }) => {
  


  

  const indiceReturn = (id) => {
    const indice = data.findIndex(i => i._id === id)
    return indice
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddinTop: 50 }}
        scrollEventThrottle={16}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={
                item.id % 2 === 0
                  ? styles.categoryContainerDark
                  : styles.categoryContainerOrange
              }

              onPress={() => filterInfo(item._id)}

              
            >

              
              <View style={styles.category}>
                <View style={styles.imageFrame}>
                  <Image style={styles.image} source={{uri:data[indiceReturn(item._id)].items[0].item.image}} />
                </View>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ScrollCategory;
