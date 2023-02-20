import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Discover from '../screens/Discover';
import {ImageBackground, Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

export const ExplorerScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../components/assets/HomeTwich.png')}
        resizeMode="cover"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      />
    </View>
  );
};
