import React from 'react';
import {StyleSheet} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import MiniAppScreen from '../screens/MiniAppScreen';
import NewsScreen from '../screens/NewsScreen';

export type MainStackParamList = {
  Home: undefined;
  Profile: undefined;
  MiniApp: undefined;
  News: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  const headerOptions = {
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerTintColor: 'rgba(255,255,255,1)',
  };
  return (
    <Main.Navigator>
      <Main.Screen
        name="Parent App"
        component={HomeScreen}
        options={headerOptions}
      />
      <Main.Screen
        name="Profile"
        component={DetailScreen}
        options={headerOptions}
      />
      <Main.Screen
        name="MiniApp"
        component={MiniAppScreen}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="News"
        component={NewsScreen}
        options={{headerShown: false}}
      />
    </Main.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#16a085',
  },
  headerTitle: {
    color: 'rgba(255,255,255,1)',
  },
});

export default MainNavigator;
