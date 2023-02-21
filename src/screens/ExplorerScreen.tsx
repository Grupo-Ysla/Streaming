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

export const ExplorerScreen = () => {
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
            <Text style={styles.TextDescubrir}>Explorar</Text>
            <Text style={styles.TextSiguiente}>Top Games</Text>
          </View>
          <View style={[styles.ViewExplorer, {height: height / 3.2}]}>
            <View
              style={[
                styles.ViewBackgroundExplorer,
                {
                  height: height / 3,
                },
              ]}>
              <ImageBackground
                source={require('../components/assets/FreeBack.png')}
                style={[styles.ImageBackgroundExplore, {opacity: 0.1}]}
              />
              <Image
                source={require('../components/assets/FreeImage.png')}
                style={{left: '-8%', marginTop: '-30%'}}
              />
              <Text style={styles.TextExplore}>Free Fire</Text>
              <Text style={styles.TextNumberExplore}>18.6 K</Text>
            </View>
            <View
              style={{
                height: height / 3,
                width: '50%',
                marginStart: '1%',
              }}>
              <ImageBackground
                source={require('../components/assets/FreeBackRe.png')}
                style={[styles.ImageBackgroundExplore, {opacity: 0.1}]}
              />
              <Image
                source={require('../components/assets/Fuego.png')}
                style={{left: '25%', marginTop: '-10%'}}
              />
              <Text style={[styles.TextExplore, {bottom: '7%'}]}>
                Clash Royale
              </Text>
              <Text style={[styles.TextNumberExplore, {bottom: '7%'}]}>
                28.6 K
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.ViewCategory,
              {
                height: height / 15,
              },
            ]}>
            <Text style={styles.TextCategory}>Categorias</Text>
            <Text
              style={[
                styles.TextCategory,
                {color: 'gray', marginStart: '10%'},
              ]}>
              Canales en vivo
            </Text>
          </View>
          <View
            style={[
              styles.ViewAllCategories,
              {
                height: height / 15,
              },
            ]}>
            <Text style={styles.TextAllCategories}>Todas las categorias</Text>
          </View>
          <View
            style={[
              {
                flexDirection: 'column',
                marginStart: '2%',
                height: height / 2.1,
                borderRadius: 12,
                marginEnd: '2%',
              },
            ]}>
            <View
              style={[
                {
                  flexDirection: 'row',
                  marginStart: '2%',
                  height: height / 7,
                  borderRadius: 12,
                  marginEnd: '2%',
                },
              ]}>
              <ImageBackground
                source={require('../components/assets/AllCategoriesBack.png')}
                style={[styles.ImageBackgroundCategories, {opacity: 0.1}]}
              />
              <Image
                source={require('../components/assets/FallGuys.png')}
                style={{
                  left: '1%',
                  marginTop: '-1%',
                  height: '80%',
                  width: '19%',
                  borderRadius: normalize(12),
                }}
              />
              <View
                style={{
                  marginStart: '10%',
                  width: '80%',
                  marginTop: '3%',
                  flexDirection: 'column',
                }}>
                <Text style={{color: 'white', fontSize: 17, width: '50%'}}>
                  Fall Guys: Ultimate knockout
                </Text>
                <View
                  style={{
                    width: '80%',
                    marginTop: '3%',
                    flexDirection: 'row',
                  }}>
                  <Text style={{color: 'white', fontSize: 10, width: '40%'}}>
                    6.4 Espectadores
                  </Text>
                  <Text style={{color: 'white', fontSize: 10, width: '40%'}}>
                    4.5 M Seguidores
                  </Text>
                </View>
                <View
                  style={[
                    styles.ViewCategory,
                    {marginTop: '2%', width: '100%'},
                  ]}>
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
            </View>
            <View
              style={[
                {
                  flexDirection: 'row',
                  marginStart: '2%',
                  height: height / 7,
                  borderRadius: 12,
                  marginEnd: '2%',
                  marginTop: '5%',
                },
              ]}>
              <ImageBackground
                source={require('../components/assets/AllCategoriesBack.png')}
                style={[styles.ImageBackgroundCategories, {opacity: 0.1}]}
              />
              <Image
                source={require('../components/assets/Fortnite.png')}
                style={{
                  left: '1%',
                  marginTop: '-1%',
                  height: '80%',
                  width: '19%',
                  borderRadius: normalize(12),
                }}
              />
              <View
                style={{
                  marginStart: '10%',
                  width: '80%',
                  marginTop: '3%',
                  flexDirection: 'column',
                }}>
                <Text style={{color: 'white', fontSize: 17, width: '50%'}}>
                  Fortnite
                </Text>
                <View
                  style={{
                    width: '80%',
                    marginTop: '3%',
                    flexDirection: 'row',
                  }}>
                  <Text style={{color: 'white', fontSize: 10, width: '40%'}}>
                    75.0 Espectadores
                  </Text>
                  <Text style={{color: 'white', fontSize: 10, width: '40%'}}>
                    78.5 M Seguidores
                  </Text>
                </View>
                <View
                  style={[
                    styles.ViewCategory,
                    {marginTop: '2%', width: '100%'},
                  ]}>
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
    bottom: normalize(10),
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
  ImageBackgroundExplore: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    opacity: 0.3,
    height: '100%',
    width: '95%',
  },
  ImageBackgroundCategories: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    opacity: 0.3,
    height: '100%',
    width: '100%',
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
    marginLeft: '35%',
    fontSize: normalize(13),
    fontWeight: '400',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewExplorer: {
    flexDirection: 'row',
    marginStart: '2%',
    marginTop: '3%',
  },
  ViewBackgroundExplorer: {
    flexDirection: 'column',
    width: '50%',
  },
  TextExplore: {
    bottom: '35%',
    color: 'white',
    marginStart: '10%',
    fontSize: 15,
  },
  TextNumberExplore: {
    bottom: '35%',
    color: 'white',
    marginStart: '10%',
    fontSize: normalize(13),
  },
  ViewCategory: {
    flexDirection: 'row',
    marginStart: '-1%',
  },
  TextCategory: {
    textAlignVertical: 'center',
    color: 'white',
    marginStart: '5%',
  },
  ViewAllCategories: {
    flexDirection: 'row',
    marginStart: '2%',
  },
  TextAllCategories: {
    textAlignVertical: 'center',
    color: 'white',
    marginStart: '4%',
    fontSize: normalize(13),
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
    fontSize: normalize(8),
    fontWeight: '400',
    marginStart: '18%',
  },
});
