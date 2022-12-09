import { View, Image} from 'react-native';
import React from 'react';
import { styles } from './styles';
import HomeSlider from '../../components/HomeSlider/HomeSlider';


const Home = () => {
  return (
    <View>
      <Image
        source={require('../../../assets/Home/principal.png')}
        style={styles.image}
      />
      <HomeSlider />
    </View>
  );
};

export default Home;
