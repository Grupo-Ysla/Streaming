import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeScreenStack} from './Stack';
import {BlurView} from 'expo-blur';
import {StyleSheet, View} from 'react-native';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {normalize} from '../helpers/responsive';
import {ExplorerScreen} from '../screens/ExplorerScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          let iconName = '';
          switch (route.name) {
            case 'home':
              iconName = 'home';
              break;
            case 'List':
              iconName = 'ios-search';
              break;
            case 'doc':
              iconName = 'compass-sharp';
              break;
            case 'user':
              iconName = 'notifications';
              break;
          }
          return (
            <Icon
              name={iconName}
              size={size}
              color={focused ? 'white' : 'gray'}
            />
          );
        },
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          borderTopWidth: 0,
          height: normalize(75),
          paddingBottom: normalize(8),
          flex: 1,
        },
        tabBarBackground: () => (
          <BlurView intensity={0} style={StyleSheet.absoluteFill}>
            <Image
              style={{
                width: '100%',
                opacity: 0.5,
              }}
              source={require('../components/assets/sustraccion.png')}
            />
          </BlurView>
        ),
      })}>
      <Tab.Screen
        name="home"
        component={HomeScreenStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="List"
        component={HomeScreenStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={'Twich'}
        component={HomeScreenStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, size}) => (
            <TouchableOpacity>
              <View style={styles.bottomTwich}>
                <Image
                  style={styles.imageBottomTwich}
                  source={require('../components/assets/Trazado.png')}
                  resizeMode="cover"
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="doc"
        component={ExplorerScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="user"
        component={HomeScreenStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  bottomTwich: {
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: normalize(30),
    height: normalize(100),
    left: normalize(0),
    bottom: normalize(5),
  },
  imageBottomTwich: {
    height: normalize(120),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
