import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

const SplashScreen = () => {
  const startAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(startAnimation, {
          toValue: 900,
          useNativeDriver: true,
          duration: 6000,
        }),
      ]).start();
    }, 500);
  }, []);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        transform: [
          {
            translateY: startAnimation,
          },
        ],
      }}>
      <Animated.Image
        source={require('../components/assets/SplashTwich.png')}
        style={{
          width: '100%',
          flex: 1,
          transform: [
            {
              translateY: startAnimation,
            },
          ],
        }}></Animated.Image>
    </Animated.View>
  );
};

export default SplashScreen;
