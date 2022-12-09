import React from 'react'
import { View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH }  from './CarouselCardItem'
import data from './slider'

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)
  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 52,
          height: 9,
          borderRadius: 3,
          marginHorizontal: 0,
          backgroundColor: "#EB7828",
        }}
        inactiveDotStyle={{ 
          width: 19,
          height: 9,
          borderRadius: 3,
          marginHorizontal: 0,
          backgroundColor: "#CBCBCB",

      }}
        tappableDots={true}
      />
    </View>
  )
}
export default CarouselCards