import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {MainStackNavigationProp} from '../navigation/MainNavigator';
import Button from '../components/Button';
import {Colors} from '../constants/Colors';

const HomeScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>MiniApp HomeScreen V1.0.2</Text>
      <Image
        source={require('../assets/pic_5.jpg')}
        //source={require('../../../../assets/pic1.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
      <Button
        title="View List"
        style={styles.button}
        onPress={() => {
          navigation.navigate('Gallery');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 40,
  },
  image: {
    width: 300,
    height: 200,
  },
  button: {
    width: '50%',
    borderRadius: 16,
    marginVertical: 8,
    backgroundColor: Colors.primary,
  },
});

export default HomeScreen;
