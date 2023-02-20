import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ImageBackground,
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {normalize} from '../helpers/responsive';

const Stack = createNativeStackNavigator();

export const HomeScreen = () => {
  const {height, width} = Dimensions.get('window');

  return (
    <SafeAreaView style={{flex: 1}}>
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
        <View style={{height: height / 5.5, flexDirection: 'row'}}>
          <ImageBackground
            source={require('../components/assets/RectanguloSuperior.png')}
            resizeMode="cover"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              left: 0,
              opacity: 0.3,
              height: '100%',
            }}
          />
          <Image
            style={[
              styles.tinyLogo,
              {
                height: normalize(35),
                width: normalize(35),
              },
            ]}
            source={require('../components/assets/Perfil.png')}
          />
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: normalize(25),
                fontSize: normalize(15),
                left: normalize(-15),
                color: 'white',
              }}>
              M4st3rmiau
            </Text>
            <Text
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: normalize(10),
                left: normalize(-15),
                color: '#66cdaa',
              }}>
              ONLINE
            </Text>
          </View>
          <View style={{justifyContent: 'space-between', marginStart: '20%'}}>
            <Icon
              name="md-chatbubble-ellipses-outline"
              style={{
                fontSize: normalize(25),
                color: 'white',
                marginTop: normalize(25),
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../components/assets/monedas.png')}
              style={{
                marginTop: normalize(25),
                marginLeft: normalize(10),
              }}
            />
            <Text
              style={{
                position: 'absolute',
                marginTop: normalize(28),
                marginStart: normalize(30),
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontWeight: '600',
              }}>
              200
            </Text>
          </View>
        </View>
        <View style={{height: height / 12, flexDirection: 'row'}}>
          <Image
            style={[
              styles.bottom,
              {
                height: normalize(8),
                width: normalize(8),
                backgroundColor: '#8a2be2',
              },
            ]}
          />
          <Text
            style={{
              marginTop: normalize(12),
              marginLeft: normalize(5),
              fontSize: normalize(22),
              fontWeight: '300',
              color: 'white',
            }}>
            Descubrir
          </Text>
          <Text
            style={{
              marginTop: normalize(22),
              marginLeft: '5%',
              fontSize: normalize(13),
              fontWeight: '300',
              color: 'gray',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            Siguiendo
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: normalize(120),
    height: normalize(120),
    borderRadius: normalize(100),
    borderColor: '#8a2be2',
    borderWidth: normalize(3),
    resizeMode: 'contain',
    margin: normalize(25),
    left: -5,
    shadowColor: '#000000',
    shadowOffset: {
      width: normalize(120),
      height: normalize(120),
    },
    shadowOpacity: normalize(5),
    shadowRadius: normalize(120),
    elevation: normalize(200),
  },
  bottom: {
    borderRadius: normalize(100),
    borderColor: '#8a2be2',
    borderWidth: normalize(3),
    marginTop: normalize(25),
    marginLeft: normalize(25),
  },
});
