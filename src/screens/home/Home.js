import React, { useState } from 'react'
import { View, Text } from 'react-native';
import RegularButton from '../../components/button/RegularButton';

const Home = ({navigation}) => {
    const [count, setCount] = useState(0);
    const onPress = () => {
        setCount(prevCount => prevCount + 1);
    };
    const goToProducts = () => {
        navigation.navigate('Products')
    }
  return (
    <View>
        <RegularButton title={"Press"} onPress={onPress} />
        <Text>
        {count}
        </Text>
        <RegularButton title={'Go to products'} onPress={goToProducts} />
    </View>
  );
};

export default Home;
// haoleu coaie sam bag cine ba