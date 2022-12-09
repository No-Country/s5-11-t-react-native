import React from 'react';
import { View, Text,  Image} from 'react-native';
import CounterHorizontal from '../../../Counter/CounterHorizontal';
import { styles } from './stylesItemDetail';
const ItemDetail = ({item, valueQuantity, setValueQuantity}) => {

  

    return (
        <View style={styles.containerItem}>
    
          <View style={styles.imageFrame}>
            <Image style={styles.image} source={{uri:item.image}} />
          </View>
          <View style={styles.ratingContainer}>
            <Image style={styles.starIcon} source={require('../../../../../assets/Icons/StarRating.png')} />
            <Text>4.5</Text>
          </View>
          
          <View style={styles.headings}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>$ {item.price}</Text>
          </View>
          <View style={styles.containerDescription}>
              <Text style={styles.description}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis justo in arcu lacinia scelerisque tristique fringilla arcu. Aenean viverra torto ue tristique fringilla arcu. 
              </Text>
          </View>
          
          <View style={styles.containerCounter}>
            <Text style={styles.cantidad}>Cantidad</Text>
            <CounterHorizontal item={item} valueQuantity={valueQuantity} setValueQuantity={setValueQuantity}/>
          </View>
        
      </View>
    );
}

export default ItemDetail;