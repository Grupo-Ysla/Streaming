import React, {useEffect} from 'react';
import {View, Animated} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/navigation/Navigation';
import SplashScreen from './src/screens/SplashScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={{flex: 1}}>
        <Navigation />
        <SplashScreen />
      </View>
    </SafeAreaProvider>
  );
};

export default App;
