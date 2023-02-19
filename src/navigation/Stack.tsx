import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Discover from '../screens/Discover';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator();

export const HomeScreenStack = () => {
  return <Text>Hola</Text>;
};
