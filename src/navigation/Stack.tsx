import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {ExplorerScreen} from '../screens/ExplorerScreen';
import SceneName from './SceneNames';

const Stack = createNativeStackNavigator();

export const HomeScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SceneName.HomeScreen}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SceneName.ExplorerScreen}
        component={ExplorerScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
