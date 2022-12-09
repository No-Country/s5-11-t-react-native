import { View,SafeAreaView} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import Button from '../Button';
import CarouselCards from '../../screens/Home/CarouselCards';


const HomeSlider = () => {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.headingContainer}>
      <CarouselCards />
      <View>
        <Button
          text="Inicio"
          styleBtn={styles.homeBtn}
          styleTextBtn={styles.textBtn}
          onPress={() => {
            navigation.navigate('Tables');
          }}
        />
      </View>
    </SafeAreaView>
    </View>
  );
};

export default HomeSlider;
