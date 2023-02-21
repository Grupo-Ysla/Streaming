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
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {normalize} from '../helpers/responsive';
import {ScrollView} from 'react-native-gesture-handler';

export const HomeScreen = () => {
  const {height, width} = Dimensions.get('window');

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden={true} barStyle="default" translucent />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../components/assets/HomeTwich.png')}
            resizeMode="cover"
            style={styles.ImageBackgroundPrincipal}
          />
          <View style={{height: height / 5.5, flexDirection: 'row'}}>
            <ImageBackground
              source={require('../components/assets/RectanguloSuperior.png')}
              resizeMode="cover"
              style={styles.ImageBackgroundName}
            />
            <Image
              style={styles.ImageUser}
              source={require('../components/assets/Perfil.png')}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.TextName}>M4st3rmiau</Text>
              <Text style={styles.TextOnline}>ONLINE</Text>
            </View>
            <View style={{justifyContent: 'space-between', marginStart: '20%'}}>
              <Icon
                name="md-chatbubble-ellipses-outline"
                style={styles.IconMessage}
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
              <Text style={styles.TextCoins}>200</Text>
            </View>
          </View>
          <View
            style={{
              height: height / 12,
              flexDirection: 'row',
              marginStart: '2%',
            }}>
            <Image style={[styles.bottom]} />
            <Text style={styles.TextDescubrir}>Descubrir</Text>
            <Text style={styles.TextSiguiente}>Siguiendo</Text>
          </View>
          <View
            style={{
              height: height / 9,
              flexDirection: 'row',
              marginStart: '10%',
              marginEnd: '10%',
            }}>
            <ImageBackground
              source={require('../components/assets/Siguiendo.png')}
              resizeMode="cover"
              style={styles.ImageBackgroundName}
            />
            <TouchableOpacity style={styles.ViewStyle}>
              <Image source={require('../components/assets/S.Accion.png')} />
              <Text style={styles.textStyle}>Accion</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ViewStyle}>
              <Image source={require('../components/assets/Sports.png')} />
              <Text style={styles.textStyle}>Sports</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ViewStyle}>
              <Image source={require('../components/assets/Rpg.png')} />
              <Text style={styles.textStyle}>RPG</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ViewStyle}>
              <Image source={require('../components/assets/Musica.png')} />
              <Text style={styles.textStyle}>Musica</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.ViewCanals, {height: height / 15}]}>
            <Text style={styles.TextCanals}>Canales en vivo</Text>
          </View>
          <View style={[styles.ViewCanals, {height: height / 4}]}>
            <ImageBackground
              source={require('../components/assets/Streamer.png')}
              resizeMode="cover"
              style={styles.ImageStreamer}
            />
            <View style={[styles.ViewStreamers, {height: height / 30}]}>
              <Text style={styles.TextStreamer}>En vivo</Text>
            </View>
            <View style={[styles.ViewViews, {height: height / 30}]}>
              <Text style={styles.TextViews}>13k Views</Text>
            </View>
          </View>
          <View
            style={[
              styles.ViewTransmission,
              {
                height: height / 18,
              },
            ]}>
            <Text style={{color: 'white', fontSize: 12}}>
              Auronplay Esta transmitiendo Amoung us
            </Text>
            <View style={styles.ViewCategory}>
              <View style={styles.ViewCategorySections}>
                <Text style={styles.TextCategorySections}>Accion</Text>
              </View>
              <View style={[styles.ViewCategorySections, {width: '25%'}]}>
                <Text style={styles.TextCategorySections}>Plataformas</Text>
              </View>
              <View style={[styles.ViewCategorySections, {width: '20%'}]}>
                <Text style={styles.TextCategorySections}>Deportes</Text>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.ViewCanals,
              {
                height: height / 15,
              },
            ]}>
            <Text style={styles.TextRecommended}>Juegos recomendados</Text>
          </View>
          <View
            style={{
              height: height / 3.2,
              flexDirection: 'row',
              marginStart: '10%',
              width: '100%',
            }}>
            <View
              style={[
                styles.ViewRecommended,
                {
                  height: height / 9,
                },
              ]}>
              <Image source={require('../components/assets/Minecraft.png')} />
              <Text style={styles.TextGame}>Minecraft</Text>
            </View>
            <View
              style={[
                styles.ViewRecommended,
                {
                  height: height / 9,
                  marginStart: '10%',
                },
              ]}>
              <Image source={require('../components/assets/Minecraft.png')} />
              <Text style={styles.TextGame}>Minecraft</Text>
            </View>
            <View
              style={[
                styles.ViewRecommended,
                {
                  height: height / 9,
                  marginStart: '10%',
                },
              ]}>
              <Image source={require('../components/assets/Minecraft.png')} />
              <Text style={styles.TextGame}>Minecraft</Text>
            </View>
            <View
              style={[
                styles.ViewRecommended,
                {
                  height: height / 9,
                  marginStart: '10%',
                },
              ]}>
              <Image source={require('../components/assets/Minecraft.png')} />
              <Text style={styles.TextGame}>Minecraft</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottom: {
    borderRadius: normalize(100),
    borderColor: '#8a2be2',
    borderWidth: normalize(3),
    marginTop: normalize(25),
    marginLeft: normalize(25),
    height: normalize(8),
    width: normalize(8),
    backgroundColor: '#8a2be2',
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: normalize(12),
    bottom: 10,
  },
  ViewStyle: {
    flexDirection: 'column',
    marginStart: '5%',
  },
  TextName: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: normalize(25),
    fontSize: normalize(15),
    left: normalize(-15),
    color: 'white',
  },
  ImageBackgroundPrincipal: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  ImageBackgroundName: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    opacity: 0.3,
    height: '100%',
  },
  ImageUser: {
    height: normalize(35),
    width: normalize(35),
    margin: normalize(25),
    left: normalize(-3),
  },
  TextOnline: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: normalize(10),
    left: normalize(-15),
    color: '#66cdaa',
  },
  IconMessage: {
    fontSize: normalize(25),
    color: 'white',
    marginTop: normalize(25),
  },
  TextCoins: {
    position: 'absolute',
    marginTop: normalize(28),
    marginStart: normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: '600',
  },
  TextDescubrir: {
    marginTop: normalize(12),
    marginLeft: normalize(5),
    fontSize: normalize(22),
    fontWeight: '300',
    color: 'white',
  },
  TextSiguiente: {
    marginTop: normalize(22),
    marginLeft: '5%',
    fontSize: normalize(13),
    fontWeight: '300',
    color: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewDescubrir: {
    flexDirection: 'row',
    marginStart: '10%',
    marginEnd: '10%',
  },
  ViewCanals: {
    flexDirection: 'row',
    marginStart: '10%',
    marginEnd: '10%',
  },
  TextCanals: {
    fontSize: normalize(15),
    fontWeight: '400',
    textAlignVertical: 'center',
    color: 'white',
  },
  ImageStreamer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: '100%',
  },
  ViewStreamers: {
    flexDirection: 'row',
    margin: '5%',
    backgroundColor: '#E33FB1',
    borderRadius: 25,
    width: '22%',
  },
  TextStreamer: {
    textAlignVertical: 'center',
    color: 'white',
    fontSize: normalize(12),
    fontWeight: '400',
    marginStart: '18%',
  },
  ViewViews: {
    flexDirection: 'row',
    margin: '5%',
    marginStart: '32%',
    backgroundColor: '#6234C8',
    borderRadius: 25,
    width: '30%',
  },
  TextViews: {
    textAlignVertical: 'center',
    color: 'white',
    fontSize: normalize(12),
    fontWeight: '400',
    marginStart: '18%',
  },
  ViewTransmission: {
    flexDirection: 'column',
    marginStart: '10%',
    marginEnd: '10%',
  },
  ViewCategory: {
    flexDirection: 'row',
    margin: '1%',
    borderRadius: 25,
    width: '100%',
  },
  ViewCategorySections: {
    flexDirection: 'row',
    margin: '1%',
    backgroundColor: '#707070',
    borderRadius: 25,
    width: '18%',
    opacity: 0.2,
  },
  TextCategorySections: {
    textAlignVertical: 'center',
    color: 'white',
    fontSize: normalize(10),
    fontWeight: '400',
    marginStart: '18%',
  },
  TextRecommended: {
    fontSize: normalize(15),
    fontWeight: '400',
    textAlignVertical: 'center',
    color: 'white',
  },
  ViewRecommended: {
    width: '20%',
    borderRadius: 15,
  },
  TextGame: {
    textAlign: 'center',
    color: 'white',
    fontSize: normalize(12),
  },
});
