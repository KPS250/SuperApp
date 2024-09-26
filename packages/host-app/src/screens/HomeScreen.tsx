import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {MainStackNavigationProp} from '../navigation/MainNavigator';
import Button from '../components/Button';

const HomeScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const navigateTo = screen => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*OBQlBO7TDm3Tyour',
        }}
        //source={require('../../../../assets/pic1.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Button
        label="Profile"
        style={styles.button}
        onPress={() => navigateTo('Profile')}
      />
      <Button
        label="MiniApp"
        style={styles.button}
        onPress={() => navigateTo('MiniApp')}
      />
      <Button
        label="News"
        style={styles.button}
        onPress={() => navigateTo('News')}
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
  button: {
    width: '50%',
    borderRadius: 16,
    marginVertical: 8,
  },
  logo: {
    width: 300,
    height: 200,
  },
});

export default HomeScreen;
