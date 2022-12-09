import React from 'react'
import { View, Text, StyleSheet, Dimensions} from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 10
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index} >
      <Text style={styles.header}>{item.title} </Text>
      <Text style={styles.header2}>{item.title2}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22191C',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingTop: 1,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  header: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    paddingTop: 1,
    textAlign: "center",
  },

  header2: {
    color: "#EB7828",
    fontSize: 35,
    fontWeight: "bold",
    paddingTop: 1,
    textAlign: "center",
  },

  body: {
    color: "#FFFFFF",
    fontSize: 15,
    paddingTop: 10,
    textAlign: "center",
  }
})

export default CarouselCardItem